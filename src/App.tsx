import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GridPattern } from './components/GridPattern';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Capabilities } from './sections/Capabilities';
import { Projects } from './sections/Projects';
import { Proposal } from './sections/Proposal';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-navy-900">
      {/* Technical Lab Blueprint Background Grid */}
      <GridPattern />
      
      {/* Responsive Navigation Header */}
      <Header />
      
      {/* Page Sections */}
      <main className="flex-grow">
        <Hero />
        
        {/* Decorative divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
        </div>
        
        <About />
        
        {/* Decorative divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
        </div>
        
        <Capabilities />
        
        {/* Decorative divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
        </div>
        
        <Projects />
        
        {/* Decorative divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
        </div>
        
        <Proposal />
        
        {/* Decorative divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
        </div>
        
        <Contact />
      </main>
      
      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
