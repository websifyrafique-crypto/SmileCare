import { BLOG_POSTS } from '../data';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Dental Advice & Smile Care Tips</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed with the latest insights, tips, and news from our dental experts in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-sky-700 tracking-wide uppercase shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time>{post.date}</time>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 mt-auto transition-colors">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
