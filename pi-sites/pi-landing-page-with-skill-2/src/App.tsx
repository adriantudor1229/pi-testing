import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './features/landing/LandingPage';
import { AboutPage } from './features/about/AboutPage';
import { ContactPage } from './features/contact/ContactPage';
import { PricingPage } from './features/pricing/PricingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
