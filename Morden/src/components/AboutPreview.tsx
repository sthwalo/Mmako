import { Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPreview() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              alt="Dr. Tracy Mmako"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Award className="text-[#00A86B] h-6 w-6" />
              <h2 className="text-[#00A86B] text-lg font-semibold">Expert Care</h2>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Meet Dr. Tracy Mmako
            </h3>
            <p className="text-gray-600 mb-8">
              Dr. Tracy Mmako is a highly skilled neurologist dedicated to providing exceptional 
              care for patients with neurological conditions. With extensive medical training 
              and a compassionate approach, she ensures each patient receives personalized attention 
              and comprehensive treatment.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#00A86B]">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    value: "10+",
    label: "Years Experience"
  },
  {
    value: "1000+",
    label: "Patients Treated"
  },
  {
    value: "15+",
    label: "Specializations"
  },
  {
    value: "24/7",
    label: "Emergency Care"
  }
];