import { Link } from 'react-router-dom';
import { CLINIC_INFO, SERVICES } from '../data';
import { Activity, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <img src="/logo.png" alt="SmileCare Dental Studio" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium dental care in Lahore designed around your comfort, oral health, and long-term smile confidence. Experience modern dentistry with a personal touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-sky-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-sky-400">About Us</Link></li>
              <li><Link to="/dentists" className="hover:text-sky-400">Our Dentists</Link></li>
              <li><Link to="/gallery" className="hover:text-sky-400">Smile Gallery</Link></li>
              <li><Link to="/problems" className="hover:text-sky-400">Dental Problems</Link></li>
              <li><Link to="/blog" className="hover:text-sky-400">Dental Blog</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-sky-400">
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
                <MapPin className="h-5 w-5 shrink-0 text-sky-500" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-sky-500" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-sky-500" />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/book-appointment"
                className="inline-block rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
