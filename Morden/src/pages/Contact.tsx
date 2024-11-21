import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#00A86B] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Phone Numbers</h3>
                    <p className="text-gray-600">Tel: +27 130 012 280</p>
                    <p className="text-gray-600">Cell: +27 79 051 4886</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#00A86B] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@drmmako.co.za</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#00A86B] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Riverside Medical Center</p>
                    <p className="text-gray-600">05 Torrent Cres</p>
                    <p className="text-gray-600">Mbombela 1200</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#00A86B] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Operating Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Information */}
            <div className="bg-red-50 rounded-lg p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-700 mb-2">Emergency Contact</h3>
              <p className="text-red-600">
                For medical emergencies, please contact your nearest emergency room or call emergency services at 10177.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00A86B] focus:border-[#00A86B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00A86B] focus:border-[#00A86B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00A86B] focus:border-[#00A86B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00A86B] focus:border-[#00A86B]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00A86B] text-white py-3 px-6 rounded-md hover:bg-[#008f5a] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}