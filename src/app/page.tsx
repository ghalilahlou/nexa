import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Clients from "../components/Clients";
import Expertise from "../components/Expertise";
import Talent from "../components/Talent";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <AboutUs />
      <Clients />
      <Expertise />
      <Talent />
      <Contact />
      </main>
  );
}
