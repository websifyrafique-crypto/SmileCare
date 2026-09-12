import { PROBLEMS } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Problems() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Common Dental Problems</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't ignore your oral health. Learn about the most common dental issues we successfully treat every day at SmileCare Dental Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-start group">
              <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{problem.desc}</p>
              <Link to="/book-appointment" className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 mt-auto">
                Consult a Doctor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
