import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Services from "./components/Services";
import Vehicle from "./components/Vehicle";
import Destinations from "./components/Destinations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-body text-stone-900">
        <Header />
        <main>
          <Hero />
          <Company />
          <Services />
          <Vehicle />
          <Destinations />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
