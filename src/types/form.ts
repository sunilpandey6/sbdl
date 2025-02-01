export type ContactPurpose = 'review' | 'booking' | 'query';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  purpose: ContactPurpose;
  message: string;
}