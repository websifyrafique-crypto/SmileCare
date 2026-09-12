/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Dentists from './pages/Dentists';
import DentistProfile from './pages/DentistProfile';
import Problems from './pages/Problems';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="dentists" element={<Dentists />} />
          <Route path="dentists/:id" element={<DentistProfile />} />
          <Route path="problems" element={<Problems />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-appointment" element={<BookAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
