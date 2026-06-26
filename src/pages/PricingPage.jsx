import Navbar from '../components/layout/Navbar';
import PricingSection from '../components/pricing/PricingSection';
import Footer from '../components/layout/Footer';
import BackgroundLayer from '../components/layout/BackgroundLayer';
import { useEffect } from 'react';

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundLayer opacity={0.3} />
      
      {/* Premium Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          }}
        />
        
        {/* Blue Orb behind Hero */}
        <div 
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(17,76,90,0.4) 0%, transparent 70%)',
            opacity: 0.8
          }}
        />

        {/* Orange Orb for featured card focus */}
        <div 
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(255,153,50,0.15) 0%, transparent 70%)',
            opacity: 0.6
          }}
        />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-24 min-h-screen flex flex-col">
        <PricingSection />
      </main>

      <Footer />
    </>
  );
}
