import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import Header from './components/Header';
import Work from './pages/Work';
import Fonts from './pages/Fonts';
import About from './pages/About';
import Contact from './pages/Contact';

export default function AppRouter() {
  return (
      <Router>
        <Head />
        <Header />
        <Routes> 
            <Route index element={<Work />} />
            <Route path='Fonts' element={<Fonts />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
        </Routes>
      </Router>
  );
}