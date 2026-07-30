import { FaWhatsapp } from "react-icons/fa";
import { site } from "../config/site.js";

export default function WhatsAppButton() {
  const message = `Hello ${site.name}, I would like help choosing a product.`;
  const whatsappURL = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return <a href={whatsappURL} target="_blank" rel="noopener noreferrer" aria-label="Chat with Mila-Karton on WhatsApp" className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25d366] p-4 text-white shadow-xl transition hover:scale-105 hover:bg-[#1ebe5d]"><FaWhatsapp size={30} /></a>;
}
