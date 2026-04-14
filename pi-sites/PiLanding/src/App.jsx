import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-void text-white font-orbitron antialiased">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
