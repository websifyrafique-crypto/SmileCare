import { CLINIC_INFO } from '../data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are here to answer your questions and help you schedule your visit to the best dental clinic in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Clinic Address</h3>
                  <p className="text-slate-600 leading-relaxed">{CLINIC_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Phone & WhatsApp</h3>
                  <p className="text-slate-600">{CLINIC_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">{CLINIC_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Opening Hours</h3>
                  <p className="text-slate-600">{CLINIC_INFO.timings}</p>
                  <p className="text-sm text-slate-400 mt-1">Sunday: Closed (Emergencies only)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
               <Link
                  to="/book-appointment"
                  className="w-full inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-slate-800"
                >
                  Book an Appointment
                </Link>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-200 rounded-3xl overflow-hidden shadow-sm h-[500px] lg:h-auto">
             <iframe
                src={CLINIC_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="filter contrast-100 opacity-90"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
