import { useParams, Link, Navigate } from 'react-router-dom';
import { DENTISTS } from '../data';
import { ArrowLeft, GraduationCap, Clock, Award } from 'lucide-react';

export default function DentistProfile() {
  const { id } = useParams();
  const dentist = DENTISTS.find((d) => d.id === id);

  if (!dentist) {
    return <Navigate to="/dentists" replace />;
  }

  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link to="/dentists" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-sky-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden p-8 lg:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
               <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                 <img 
                   src={dentist.image} 
                   alt={dentist.name} 
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">{dentist.name}</h1>
              <p className="text-xl text-sky-600 font-semibold mb-6">{dentist.specialty}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <GraduationCap className="h-6 w-6 text-slate-400 flex-shrink-0" />
                   <div>
                     <p className="text-xs font-semibold text-slate-500 uppercase">Qualifications</p>
                     <p className="text-sm font-medium text-slate-900">{dentist.qualification}</p>
                   </div>
                </div>
                <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <Clock className="h-6 w-6 text-slate-400 flex-shrink-0" />
                   <div>
                     <p className="text-xs font-semibold text-slate-500 uppercase">Experience</p>
                     <p className="text-sm font-medium text-slate-900">{dentist.experience}</p>
                   </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-sky-500 mr-2" />
                  About Dr. {dentist.name.split(' ')[1]}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {dentist.bio}
                </p>
              </div>

              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-sky-700 hover:shadow-lg w-full sm:w-auto"
              >
                Book Appointment with {dentist.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
