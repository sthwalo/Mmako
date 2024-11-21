export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Tel: +27 130 012 280</p>
            <p className="mb-2">Cell: +27 79 051 4886</p>
            <p className="mb-2">Email: info@drmmako.co.za</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="mb-2">Riverside Medical Center</p>
            <p className="mb-2">05 Torrent Cres</p>
            <p className="mb-2">Mbombela 1200</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#00A86B] transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-[#00A86B] transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-[#00A86B] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2024 Global Hope Consortium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}