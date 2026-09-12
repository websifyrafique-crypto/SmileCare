import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-slate-50 py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-sky-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="aspect-video relative">
             <img 
               src={post.image} 
               alt={post.title} 
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
          
          <div className="p-8 lg:p-12">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time>{post.date}</time>
              </div>
              <div className="flex items-center text-sky-600 font-medium">
                <Tag className="h-4 w-4 mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                {post.content}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
               <h3 className="text-lg font-bold text-slate-900 mb-4">Need personalized advice?</h3>
               <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-sky-700 hover:shadow-lg"
                >
                  Book a Consultation
                </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
