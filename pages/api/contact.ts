import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { IncomingForm, Fields, Files, File } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

type FormFields = {
  name?: string;
  email?: string;
  message?: string;
  sector?: string;
  phone?: string; // Ajout du numéro de téléphone
  // Ajoute ici d'autres champs si besoin (ex: experience, phone, etc.)
};

type FormFiles = {
  file?: File;
};

type ParsedData = {
  fields: FormFields;
  files: FormFiles;
};

// Fonction d'échappement HTML pour éviter l'injection
function escapeHtml(text?: unknown) {
  return String(text || '').replace(/[&<>'"]/g, c => (
    {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[c] || c
  ));
}

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

    const { name = '', email = '', message = '', sector = '', phone = '' } = data.fields;
    const userFile = data.files.file;

    const html = `
      <div style="font-family: 'Manrope', Arial, sans-serif; color: #0a1f33; padding: 32px; max-width: 500px;">
        <div style="font-size: 1.5rem; font-weight: bold; color: #c7a770; margin-bottom: 16px;">Nexa Partners - Contact Form Submission</div>
        <div style="margin-bottom: 12px;"><b>Name:</b> ${escapeHtml(name)}</div>
        <div style="margin-bottom: 12px;"><b>Email:</b> ${escapeHtml(email)}</div>
        <div style="margin-bottom: 12px;"><b>Phone:</b> ${escapeHtml(phone)}</div>
        <div style="margin-bottom: 12px;"><b>Sector:</b> ${escapeHtml(sector)}</div>
        <div style="margin-bottom: 12px;"><b>Message:</b><br/><span style='white-space: pre-line;'>${escapeHtml(message)}</span></div>
        <div style="margin-top: 32px; font-size: 0.9rem; color: #c7a770; text-align: right;">Nexa Partners &copy; ${new Date().getFullYear()}</div>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];
    if (userFile?.filepath) {
      // Limite la taille à 2 Mo
      if (userFile.size > 2 * 1024 * 1024) {
        return res.status(400).json({ success: false, error: 'File too large (max 2MB).' });
      }
      attachments.push({
        filename: userFile.originalFilename || userFile.newFilename || 'attachment',
        content: fs.readFileSync(userFile.filepath),
        contentType: userFile.mimetype || 'application/octet-stream',
      });
    }

    await transporter.sendMail({
      from: `Nexa Partners <${process.env.GMAIL_USER}>`,
      to: ['Contact@nexa-p.com'],
      subject: `Nexa Partners - Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nSecteur: ${sector}\nMessage: ${message}`,
      html,
      attachments,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi du message.' });
  }
}
