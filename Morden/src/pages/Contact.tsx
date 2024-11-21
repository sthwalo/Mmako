import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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
          <div className="contact-section">
            <a href="https://wa.me/27790514886?text=I'm%20interested%20in%20booking%20an%20appointment%20and%20need%20more%20information%20about%20the%20services." 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#1da851] transition-colors"
              target="_blank" 
              rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 22.5c5.523 0 10-4.477 10-10S17.523 2.5 12 2.5 2 6.977 2 12c0 2.5.92 4.786 2.44 6.5L2 22.5l4-2.44a9.956 9.956 0 006 2.44z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.25c-.5-.5-1-.5-1.5 0l-.5.5-1-1 .5-.5c.5-.5.5-1 0-1.5l-.5-.5-1 1-.5-.5c-.5-.5-1-.5-1.5 0l-.5.5 1 1-.5.5c-.5.5-1 .5-1.5 0l-.5-.5-1 1 .5.5c.5.5.5 1 0 1.5l-.5.5 1 1 .5-.5c.5-.5 1-.5 1.5 0l.5.5 1-1-.5-.5c-.5-.5-.5-1 0-1.5l.5-.5 1 1 .5-.5c.5-.5 1-.5 1.5 0l.5.5 1-1-.5-.5z" />
              </svg>
              Book Appointment via WhatsApp
            </a>
            <div className="mt-4">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0000000000005!2d30.9817107!3d-25.4744822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69e7b1c9e5b7b%3A0x76a7272a4a8451db!2sRiverside%20Medical%20Center!5e0!3m2!1sen!2sza!4v1650000000000!5m2!1sen!2sza&ll=-25.4744822,30.9817107&q=Riverside%20Medical%20Center"
                  width="600"
                  height="450"
                  style={{ border:0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Riverside+Medical+Center%2C+05+Torrent+Cres%2C+Mbombela+1200" 
                  className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-[#25D366] text-white rounded-md hover:bg-[#1da851] transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          <div className="bg-red-50 rounded-lg p-6 border border-red-100">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Emergency Contact</h3>
            <p className="text-red-600">
              For medical emergencies, please contact your nearest emergency room or call emergency services at 10177.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}