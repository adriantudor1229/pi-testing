import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './features/landing/LandingPage';
import { AboutPage } from './features/about/AboutPage';
import { PricingPage } from './features/pricing/PricingPage';
import { ContactPage } from './features/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
