import { Brain, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Tracy Mmako</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated neurologist committed to advancing neurological health through expertise and compassionate care.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <img
              src="img/Tracy-.png"
              alt="Dr. Tracy Mmako"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Background</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Dr. Tracy Mmako is a highly skilled neurologist based at Riverside Medical Center, 
                dedicated to providing exceptional care for patients with neurological conditions.
              </p>
              <p className="mb-4">
                With extensive medical training and years of experience, Dr. Mmako has developed 
                expertise in diagnosing and treating a wide range of neurological disorders.
              </p>
              <p>
                Her commitment to patient care and continuous learning ensures that she stays 
                at the forefront of neurological medicine, providing the best possible care 
                for her patients.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A86B] text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education & Qualifications</h2>
          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A86B] text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{qual.title}</h3>
                  <p className="text-gray-600">{qual.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Expertise",
    description: "Committed to excellence in neurological care through continuous learning and advancement"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Compassion",
    description: "Providing empathetic care that considers the whole person, not just the condition"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Patient-Centered",
    description: "Focusing on individualized care plans that meet each patient's unique needs"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Innovation",
    description: "Utilizing the latest medical advancements for optimal patient outcomes"
  }
];

const qualifications = [
  {
    title: "Medical Degree",
    description: "Graduated with honors from a prestigious medical institution"
  },
  {
    title: "Neurology Residency",
    description: "Completed specialized training in neurological disorders and treatments"
  },
  {
    title: "Board Certification",
    description: "Licensed and certified neurologist with additional specializations"
  },
  {
    title: "Continuing Education",
    description: "Regular participation in medical conferences and research programs"
  }
];