import { SERVICES } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Complete Dental Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From routine checkups to full mouth rehabilitations, we offer a comprehensive range of premium dental treatments in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-sky-50 rounded-lg text-sky-600">
                     <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 flex-grow">{service.shortDesc}</p>
                <Link to={`/services/${service.id}`} className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
