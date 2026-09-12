import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      <TopBar />
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
