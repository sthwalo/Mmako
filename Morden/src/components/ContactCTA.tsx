import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactCTA() {
  return (
    <section className="py-16 bg-[#00A86B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Neurological Health?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with Dr. Tracy Mmako today and take the first step towards better health.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#00A86B] rounded-md hover:bg-gray-100 transition-colors"
          >
            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}