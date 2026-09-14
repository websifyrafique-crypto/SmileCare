import { Link } from 'react-router-dom';
import { CLINIC_INFO, SERVICES } from '../data';
import { Activity, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0084D1] text-sky-100">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <img src="/logo.png" alt="SmileCare Dental Studio" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-sky-100">
              Premium dental care in Lahore designed around your comfort, oral health, and long-term smile confidence. Experience modern dentistry with a personal touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-100 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-sky-100 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-sky-100 hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/dentists" className="hover:text-white">Our Dentists</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Smile Gallery</Link></li>
              <li><Link to="/problems" className="hover:text-white">Dental Problems</Link></li>
              <li><Link to="/blog" className="hover:text-white">Dental Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-sky-200" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-sky-200" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-sky-200" />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/book-appointment"
                className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0084D1] transition-colors hover:bg-sky-50"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-sky-400/30 pt-8 text-center text-sm text-sky-200">
          <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
