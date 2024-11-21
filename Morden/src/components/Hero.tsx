import { Brain } from 'lucide-react';

export function Hero() { 
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0">
        <div className="w-full h-full object-cover opacity-20">
          <img
            src="img/Door.jpeg"
            alt="Dr. Mmako"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="text-[#00A86B] h-8 w-8" />
            <h2 className="text-[#00A86B] text-xl font-semibold">Specialized Neurological Care</h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Dr. Tracy Mmako's Neurology Practice
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Dedicated to providing exceptional care for patients with neurological conditions through advanced expertise and compassionate treatment.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00A86B] hover:bg-[#008f5a] transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >

              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}