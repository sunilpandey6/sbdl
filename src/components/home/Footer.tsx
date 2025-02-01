import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">My Driving Institute</h3>
            <p className="mb-4">Your trusted partner in learning to drive safely and confidently.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +977 97-67236953 
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +977 985-7070942
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                drivingsbsandhya@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                SAINAMAINA, Butwal, Nepal, 32900
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} My Driving Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
