import { DENTISTS } from '../data';
import { Link } from 'react-router-dom';

export default function Dentists() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Meet Our Dental Experts</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our internationally trained specialists are dedicated to providing you with the highest standard of dental care in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DENTISTS.map((dentist) => (
            <div key={dentist.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-slate-100">
              <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                <img 
                  src={dentist.image} 
                  alt={dentist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{dentist.name}</h3>
                <p className="text-sm text-sky-600 font-semibold mb-2">{dentist.specialty}</p>
                <p className="text-xs text-slate-500 mb-5">{dentist.qualification}</p>
                <Link 
                  to={`/dentists/${dentist.id}`} 
                  className="inline-block rounded-full bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-sky-600 hover:text-white transition-colors w-full border border-slate-200 group-hover:border-transparent"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
