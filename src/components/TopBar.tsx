import { CLINIC_INFO } from '../data';
import { Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="hidden bg-slate-900 py-2 text-xs font-medium text-slate-300 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-3.5 w-3.5 text-sky-400" />
            <span>{CLINIC_INFO.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-3.5 w-3.5 text-sky-400" />
            <span>{CLINIC_INFO.timings}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
        <div>
          <Link
            to="/book-appointment"
            className="rounded-full bg-sky-500/10 px-4 py-1.5 font-semibold text-sky-400 transition-colors hover:bg-sky-500/20"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
