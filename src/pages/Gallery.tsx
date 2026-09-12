import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['All', 'Teeth Whitening', 'Veneers', 'Braces', 'Implants'];

const GALLERY_DATA = [
  { id: 1, category: 'Teeth Whitening', before: 'https://images.unsplash.com/photo-1606265814510-928d3f7400d1?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=400&q=80' },
  { id: 2, category: 'Veneers', before: 'https://images.unsplash.com/photo-1579840333246-88062f6825c3?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80' },
  { id: 3, category: 'Implants', before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' },
  { id: 4, category: 'Braces', before: 'https://images.unsplash.com/photo-1593081156828-4ce8bc459419?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1628177142898-93e46e623666?auto=format&fit=crop&w=400&q=80' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredData = activeTab === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeTab);

  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Real Smile Transformations</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our gallery of actual patient results. See the dramatic difference premium dental care can make.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat 
                  ? 'bg-sky-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
              >
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="block text-center text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">Before</span>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-center text-xs font-bold uppercase text-sky-600 mb-2 tracking-wider">After</span>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img src={item.after} alt="After" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 text-slate-600 text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
