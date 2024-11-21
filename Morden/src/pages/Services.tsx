import { Brain, Activity, ClipboardCheck, Stethoscope, Microscope, HeartPulse } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive neurological care using advanced diagnostic tools and treatment methods
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-[#00A86B] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-2">
                {service.treatments.map((treatment, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-[#00A86B] rounded-full mr-2"></span>
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A86B] text-white mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Neurological Disorders",
    description: "Comprehensive care for various neurological conditions",
    treatments: [
      "Migraines and Headaches",
      "Epilepsy Management",
      "Multiple Sclerosis",
      "Parkinson's Disease",
      "Stroke Recovery"
    ]
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Diagnostic Services",
    description: "Advanced testing and monitoring procedures",
    treatments: [
      "EEG Testing",
      "EMG Studies",
      "Nerve Conduction Studies",
      "Sleep Studies",
      "Cognitive Assessments"
    ]
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Clinical Evaluations",
    description: "Thorough neurological examinations",
    treatments: [
      "Initial Consultations",
      "Follow-up Care",
      "Treatment Planning",
      "Medication Management",
      "Progress Monitoring"
    ]
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Specialized Testing",
    description: "Detailed neurological investigations",
    treatments: [
      "Brain Mapping",
      "Cognitive Testing",
      "Balance Assessment",
      "Reflex Testing",
      "Neurological Imaging"
    ]
  },
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Patient Education",
    description: "Comprehensive support and information",
    treatments: [
      "Condition Management",
      "Lifestyle Guidance",
      "Prevention Strategies",
      "Family Support",
      "Resource Referrals"
    ]
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    title: "Rehabilitation Support",
    description: "Recovery and management programs",
    treatments: [
      "Physical Therapy Coordination",
      "Occupational Therapy",
      "Speech Therapy",
      "Exercise Programs",
      "Lifestyle Modifications"
    ]
  }
];

const process = [
  {
    title: "Initial Consultation",
    description: "Comprehensive evaluation of symptoms and medical history"
  },
  {
    title: "Diagnostic Testing",
    description: "Advanced testing to accurately diagnose conditions"
  },
  {
    title: "Treatment Plan",
    description: "Personalized care strategy based on diagnosis"
  },
  {
    title: "Ongoing Care",
    description: "Regular follow-up and treatment adjustments"
  }
];