import { MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function WhatsAppButton() {
  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hi , I'm reaching out from your portfolio regarding a Shopify project."
  )}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} fill="#ffffff" color="#25d366" />
      <span>How can I help you?</span>
    </a>
  );
}
