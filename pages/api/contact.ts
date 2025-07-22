import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import puppeteer from 'puppeteer';
import { IncomingForm, Fields, Files, File } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const LOGO_URL = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/assets/images/profile.png`;

type FormFields = {
  name?: string;
  email?: string;
  message?: string;
};

type FormFiles = {
  file?: File;
};

type ParsedData = {
  fields: FormFields;
  files: FormFiles;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = new IncomingForm();

    const data: ParsedData = await new Promise((resolve, reject) => {
      form.parse(req, (err: Error | null, fields: Fields, files: Files) => {
        if (err) return reject(err);
        // On force le typage pour correspondre à notre interface
        resolve({
          fields: fields as FormFields,
          files: files as FormFiles,
        });
      });
    });

    const { name = '', email = '', message = '' } = data.fields;
    const userFile = data.files.file;

    const html = `
      <div style="font-family: 'Manrope', Arial, sans-serif; color: #0a1f33; padding: 32px; max-width: 500px;">
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
          <img src='${LOGO_URL}' alt='Nexa Partners' style='width: 56px; height: 56px; border-radius: 50%; border: 2px solid #c7a770;'/>
          <div>
            <div style="font-size: 1.5rem; font-weight: bold; color: #c7a770;">Nexa Partners</div>
            <div style="font-size: 1rem; color: #c7a770;">Contact Form Submission</div>
          </div>
        </div>
        <div style="background: linear-gradient(120deg, #fffbe9 0%, #ffe5ec 100%); border-radius: 16px; box-shadow: 0 2px 16px #c7a77022; padding: 24px;">
          <div style="margin-bottom: 12px;"><b>Name:</b> ${name}</div>
          <div style="margin-bottom: 12px;"><b>Email:</b> ${email}</div>
          <div style="margin-bottom: 12px;"><b>Message:</b><br/><span style='white-space: pre-line;'>${message}</span></div>
        </div>
        <div style="margin-top: 32px; font-size: 0.9rem; color: #c7a770; text-align: right;">Nexa Partners &copy; ${new Date().getFullYear()}</div>
      </div>
    `;

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [
      {
        filename: `nexa-contact-${Date.now()}.pdf`,
        content: Buffer.from(pdfBuffer),
        contentType: 'application/pdf',
      },
    ];

    if (userFile?.filepath) {
      attachments.push({
        filename: userFile.originalFilename || userFile.newFilename || 'attachment',
        content: fs.readFileSync(userFile.filepath),
        contentType: userFile.mimetype || 'application/octet-stream',
      });
    }

    await transporter.sendMail({
      from: `Nexa Partners <${process.env.GMAIL_USER}>`,
      to: ['messnexa@gmail.com'],
      subject: `Nexa Partners - Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html,
      attachments,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi du message.' });
  }
}
