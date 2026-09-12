import { CLINIC_INFO } from '../data';
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">About {CLINIC_INFO.name}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the story behind Lahore's premier destination for advanced, pain-free dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Setting a New Standard in Dentistry</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Located in the heart of Lahore, {CLINIC_INFO.name} was established with a singular vision: to revolutionize the patient experience. We understand that visiting the dentist can be daunting, which is why we have cultivated an environment that feels more like a wellness retreat than a traditional clinic.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our multidisciplinary team of specialists utilizes cutting-edge digital dentistry—from 3D imaging to laser treatments—to ensure precise diagnoses and minimally invasive procedures. We don't just treat teeth; we build lasting relationships based on trust, transparency, and outstanding clinical results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Internationally Trained Experts',
                '100% Pain-Free Philosophy',
                'Digital Smile Design',
                'Strict Sterilization Protocols'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-sky-100 rounded-3xl transform translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
              alt="Dental Clinic Environment"
              className="relative rounded-3xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Our Mission', icon: Heart, desc: 'To provide accessible, high-quality dental care with empathy, ensuring every patient leaves with a healthy, confident smile.' },
            { title: 'Our Vision', icon: Sparkles, desc: 'To be the most trusted name in dentistry across Lahore, recognized for our clinical excellence and patient-first approach.' },
            { title: 'Our Promise', icon: ShieldCheck, desc: 'Uncompromising hygiene standards, transparent pricing, and treatments tailored perfectly to your unique oral health needs.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 mb-6">
                <item.icon className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-sky-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Experience the Difference Today</h2>
              <p className="text-sky-200 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of happy patients in Lahore who trust {CLINIC_INFO.name} for their family's dental health.
              </p>
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-sky-900 transition-transform hover:scale-105 shadow-xl"
              >
                Schedule Your Visit
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
