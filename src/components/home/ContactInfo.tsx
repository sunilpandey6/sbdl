import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
        <span>+977 9767236953</span>
      </div>
      <div className="flex items-center">
        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
        <span>+977 9857070942</span>
      </div>
      <div className="flex items-center">
        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
        <span>drivingsbsandhya@gmail.com</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
        <span>SAINAMAINA ,10 SALJHANDI Purano Film Hall, Butwal, Nepal</span>
      </div>
    </div>
  );
}