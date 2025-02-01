import { Award, Clock, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With years of experience, Sandhya Driving Institute has been the leading driving school in Nepal, 
            committed to creating confident and responsible drivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Licensed Professionals</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our instructors are certified professionals with years of teaching experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from morning, afternoon, or evening classes that fit your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Training</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Individual attention and customized learning plans for each student.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" 
              alt="Driving lesson in action" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80" 
              alt="Student learning" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80" 
              alt="Driving instructor teaching" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80" 
              alt="Training vehicle" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
