import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES, PROBLEMS, TESTIMONIALS, DENTISTS } from '../data';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Users, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-y-0 right-0 w-1/2 rounded-l-full bg-sky-50 opacity-50 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 mb-6 text-sm font-semibold text-sky-700">
                <Sparkles className="mr-2 h-4 w-4" />
                Premium Dental Clinic in Lahore
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Healthy Smiles. <br className="hidden lg:block" />
                <span className="text-sky-600">Confident Lives.</span>
              </h1>
              <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                Advanced dental care in Lahore designed around your comfort, oral health, and long-term smile. Experience painless treatments with modern technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-sky-700 hover:shadow-xl"
                >
                  Book Your Appointment
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-md ring-1 ring-slate-200 transition-all hover:bg-slate-50"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-slate-200 pt-8">
                {[
                  { label: 'Experienced Pros', icon: Users },
                  { label: 'Modern Tech', icon: ShieldCheck },
                  { label: 'Patient Focus', icon: HeartPulseIcon },
                  { label: 'Strict Hygiene', icon: Sparkles },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <item.icon className="h-6 w-6 text-sky-500 mb-2" />
                    <span className="text-xs font-semibold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
                  alt="Patient smiling at dental clinic"
                  className="rounded-2xl object-cover w-full h-[500px]"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-4 animate-bounce-slow hidden sm:flex">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <div className="text-sm font-bold text-slate-800">Trusted Patients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Modern Dental Clinic Interior"
                className="rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-600 text-white p-8 rounded-3xl shadow-xl hidden sm:block">
                <p className="text-4xl font-extrabold mb-1">15+</p>
                <p className="text-sm font-medium opacity-90">Years of Experience<br/>in Dental Care</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">Modern Dentistry With a Personal Touch</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At SmileCare Dental Studio, we believe that every smile tells a story. Our expert team of dentists in Lahore combines advanced dental technology with compassionate care to deliver exceptional results. Whether you need a routine checkup or a complete smile makeover, we ensure a comfortable, pain-free experience in a strictly sterilized environment.
              </p>
              <ul className="space-y-4 mb-8">
                {['Personalized Treatment Plans', 'Painless & Comfortable Procedures', 'State-of-the-art Equipment', 'Strict Sterilization Protocols'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700">
                Learn more about our clinic <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">Complete Dental Care Under One Roof</h2>
            <p className="text-lg text-slate-600">From routine cleanings to advanced cosmetic procedures, we provide comprehensive dental treatments tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <service.icon className="h-10 w-10 text-sky-600 mb-6 relative z-10" />
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-slate-600 mb-6 relative z-10 line-clamp-2">{service.shortDesc}</p>
                <Link to={`/services/${service.id}`} className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 relative z-10 group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-all">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-sky-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">Why Patients Choose Us</h2>
            <p className="text-lg text-sky-200">We are committed to delivering excellence in every aspect of your dental care journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Team', desc: 'Highly qualified specialists for every dental discipline.', icon: Users },
              { title: 'Advanced Tech', desc: 'Digital X-rays and modern equipment for precise care.', icon: ShieldCheck },
              { title: 'Strict Hygiene', desc: '100% sterilization protocols for your safety.', icon: Sparkles },
              { title: 'Pain-Free', desc: 'Gentle techniques ensuring maximum comfort.', icon: CheckCircle2 },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20 mb-6">
                  <feature.icon className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sky-200 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DENTISTS PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">Meet Our Dental Experts</h2>
              <p className="text-lg text-slate-600">Our clinic is home to some of Lahore's most qualified and experienced dental professionals.</p>
            </div>
            <Link to="/dentists" className="hidden md:inline-flex items-center font-semibold text-sky-600 hover:text-sky-700">
              View All Doctors <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DENTISTS.slice(0, 3).map((dentist) => (
              <div key={dentist.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={dentist.image} alt={dentist.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{dentist.name}</h3>
                  <p className="text-sm text-sky-600 font-medium mb-4">{dentist.specialty}</p>
                  <Link to={`/dentists/${dentist.id}`} className="inline-block rounded-full bg-slate-50 px-6 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-600 hover:text-white transition-colors">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-50 opacity-50" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">Ready to Take Care of Your Smile?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book a consultation with our dental team and take the first step toward healthier teeth and a more confident smile today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-sky-700 hover:shadow-xl hover:-translate-y-1"
            >
              Book Appointment Now
            </Link>
            <a
              href="tel:+923001234567"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-md ring-1 ring-slate-200 transition-all hover:bg-slate-50"
            >
              Call Us: +92 300 1234567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dummy icon for Patient Focus
function HeartPulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 9.2a1.2 1.2 0 0 1-1.9.04L5 6.5"/></svg>;
}
