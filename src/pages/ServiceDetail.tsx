import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../data';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-sky-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Services
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-sky-600 mb-6">
                <service.icon className="h-6 w-6" />
                <span className="font-semibold uppercase tracking-wider text-sm">Treatment</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">{service.title}</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.fullDesc}
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-sky-700 hover:shadow-lg"
                >
                  Book Consultation for {service.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
