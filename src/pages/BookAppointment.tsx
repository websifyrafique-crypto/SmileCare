import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES } from '../data';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookAppointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 py-24 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl border border-slate-100">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Sent!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for booking with {CLINIC_INFO.name}. Our front desk team will contact you shortly to confirm your appointment time.
          </p>
          <Link
            to="/"
            className="inline-block w-full rounded-full bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Book Your Appointment</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take the first step towards a healthier, more confident smile. Fill out the form below and we will get back to you promptly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-sky-900 text-white p-10 hidden md:block">
              <h3 className="text-xl font-bold mb-6">Clinic Information</h3>
              <ul className="space-y-6 text-sky-100 text-sm">
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 shrink-0 text-sky-400" />
                  <span>{CLINIC_INFO.timings}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 shrink-0 text-sky-400" />
                  <span>{CLINIC_INFO.phone}</span>
                </li>
              </ul>
              <div className="mt-12">
                 <p className="text-sm text-sky-300 italic">"Our goal is to provide a pain-free, comfortable experience for every patient."</p>
              </div>
            </div>
            
            <div className="p-10 md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="name">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input required type="text" id="name" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors" placeholder="Ali Khan" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="phone">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input required type="tel" id="phone" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors" placeholder="0300 1234567" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="email" id="email" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors" placeholder="ali@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="date">Preferred Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-slate-400" />
                      </div>
                      <input required type="date" id="date" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="time">Preferred Time</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-slate-400" />
                      </div>
                      <select id="time" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors appearance-none">
                        <option value="">Any time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="service">Dental Concern / Service</label>
                  <select id="service" className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors appearance-none">
                    <option value="">Select a service (Optional)</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                    <option value="other">Other Concern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="message">Message</label>
                  <div className="relative">
                     <div className="absolute top-3 left-3 pointer-events-none">
                        <FileText className="h-5 w-5 text-slate-400" />
                      </div>
                    <textarea id="message" rows={4} className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white transition-colors" placeholder="Please describe your symptoms or reason for visit..."></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white transition-all ${isSubmitting ? 'bg-sky-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700'}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
