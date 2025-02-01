import { Car, BookOpen, Shield, Award } from 'lucide-react';
import { Service } from '../../types';

const services: Service[] = [
  {
    title: 'Beginner Lessons',
    description: 'Perfect for first-time drivers. Learn the basics of vehicle control and road safety.',
    icon: 'car'
  },
  {
    title: 'Advanced Training',
    description: 'Master complex driving scenarios and advanced techniques for experienced drivers.',
    icon: 'award'
  },
  {
    title: 'Theory Classes',
    description: 'Comprehensive classroom sessions covering traffic rules and regulations.',
    icon: 'book'
  },
  {
    title: 'Defensive Driving',
    description: 'Learn to anticipate and avoid dangerous situations on the road.',
    icon: 'shield'
  }
];

const IconMap = {
  car: Car,
  award: Award,
  book: BookOpen,
  shield: Shield
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our range of professional driving courses designed to meet your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon as keyof typeof IconMap];
            return (
              <div key={service.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}