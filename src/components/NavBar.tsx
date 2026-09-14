import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../data';
import clsx from 'clsx';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
    },
    { name: 'Our Dentists', path: '/dentists' },
    { name: 'Smile Gallery', path: '/gallery' },
    { name: 'Problems', path: '/problems' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="SmileCare Dental Studio" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={clsx(
                    'flex items-center py-4 text-sm font-semibold transition-colors',
                    pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute left-0 top-full hidden pt-4 group-hover:block z-50">
                    <div className="flex w-64 origin-top-left flex-col rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/book-appointment"
              className="hidden rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700 hover:shadow-md lg:block"
            >
              Book Appointment
            </Link>
            <button
              className="p-2 text-slate-600 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={clsx(
                    'block rounded-lg px-4 py-3 text-base font-semibold',
                    pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                      ? 'bg-sky-50 text-sky-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="block rounded-lg py-2 text-sm font-medium text-slate-600 hover:text-sky-600"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
               <Link
                to="/book-appointment"
                className="block w-full rounded-full bg-sky-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
