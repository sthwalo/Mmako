import { Brain, Activity, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive neurological care for your well-being</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-[#00A86B] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white rounded-md transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

const featuredServices = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Neurological Disorders",
    description: "Expert care for conditions including migraines, epilepsy, multiple sclerosis, and Parkinson's disease."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Diagnostic Services",
    description: "Advanced testing including EEG, EMG, and nerve conduction studies for accurate diagnosis."
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Clinical Evaluations",
    description: "Comprehensive neurological assessments and personalized treatment plans."
  }
];