// import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ContactMap } from './ContactMap';
import { ContactInfo } from './ContactInfo';

const Contact = () => {
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
            <ContactInfo />
          </div>
          <ContactMap />
        </div>
      </div>
    </section>
  );
};
export default Contact;