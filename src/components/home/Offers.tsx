import { Shield, AlertTriangle, Heart } from 'lucide-react';

export function Offers() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Safe Driving Saves Lives</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-white/90">Protect yourself and others on the road</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Prevention</h3>
                <p className="text-white/90">Prevent accidents through responsible driving</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Care</h3>
                <p className="text-white/90">Show care for your community by driving safely</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Every time you get behind the wheel, you're responsible for not just your life, 
                but the lives of everyone around you. Learn to drive right, drive safe.
              </p>
              <a
                href="#contact"
                className="inline-block mt-8 bg-white text-primary-light dark:text-primary-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Start Learning Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}