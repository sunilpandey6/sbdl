import { ContactFormData } from '../types/form';

export function createWhatsAppLink(data: ContactFormData): string {
  // Replace with your WhatsApp Business phone number
  const phoneNumber = '9779857070942';
  
  const message = encodeURIComponent(
    `*New ${data.purpose.charAt(0).toUpperCase() + data.purpose.slice(1)}*\n\n` +
    `*Name:* ${data.name}\n` +
    `*Email:* ${data.email}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Purpose:* ${data.purpose}\n` +
    `*Message:* ${data.message}`
  );

  return `https://wa.me/${phoneNumber}?text=${message}`;
}