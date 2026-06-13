import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Decorative radial gradient highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-900/10 rounded-full blur-[80px] -z-10" />
      <div className="absolute top-[60%] left-1/3 w-[200px] h-[200px] bg-blue-900/10 rounded-full blur-[60px] -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Lab Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-8 tracking-wider uppercase animate-pulse">
          <Terminal className="w-3.5 h-3.5" />
          <span>System Environment Active</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          IZUNA <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-gold-400 bg-clip-text text-transparent">LAB</span>
        </h1>

        {/* Subtitle */}
        <p className="text-md md:text-lg font-mono text-gold-400 tracking-[0.2em] uppercase mb-6 font-medium">
          Research. Build. Experiment. Learn.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-12">
          A personal lab for backend engineering, observability, AI-assisted tools, and thoughtful system design.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider text-slate-300 hover:text-white bg-transparent border border-slate-800 hover:border-slate-600 hover:bg-slate-800/20 transition-all duration-300 flex items-center justify-center"
          >
            Contact
          </a>
        </div>

        {/* Tech stacks mini banner */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
          <span>Golang</span>
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
          <span>Kotlin</span>
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
          <span>Distributed Systems</span>
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
          <span>Observability</span>
        </div>
      </div>
    </section>
  );
};
