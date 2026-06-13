import { Section } from '../components/Section';
import { Code2, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Phirapon" subtitle="Software engineer, system thinker, and builder of meaningful digital tools.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
        {/* Left: Biography and Philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            Hi, I'm <span className="text-purple-400">Phirapon</span>, also known as <span className="text-gold-400">Mod</span>.
          </h3>
          <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
            I am a Software Engineer working in large-scale retail technology, currently pursuing a Master's degree in Information Technology. I am focused on backend engineering, observability, security, AI systems, and product development.
          </p>
          <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
            I grew up in Southern Thailand and now work in Bangkok, enjoying the challenge of turning real-life friction into small, useful software systems that solve concrete problems.
          </p>
          <p className="text-slate-400 italic font-light leading-relaxed text-base md:text-lg border-l-2 border-purple-500/40 pl-4 py-1">
            "I care about systems that are not only technically reliable, but also emotionally useful — tools that help people think clearer, feel less overwhelmed, and move forward."
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex gap-3">
              <Code2 className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium text-sm md:text-base">Pragmatic APIs</h4>
                <p className="text-slate-500 text-xs md:text-sm font-light mt-1">Statically typed, self-documenting, and robust endpoints.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium text-sm md:text-base">Observability First</h4>
                <p className="text-slate-500 text-xs md:text-sm font-light mt-1">Structured tracing and metrics baked in by default.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Focus Card */}
        <div className="lg:col-span-5 flex">
          <div className="w-full flex flex-col p-8 rounded-2xl bg-navy-800/20 border border-slate-800/80 backdrop-blur-md relative overflow-hidden justify-between">
            {/* Subtle background glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <h3 className="text-lg font-mono text-gold-400 tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                Current Focus Areas
              </h3>
              
              <ul className="space-y-4 font-light text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Backend API design and distributed systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Observability, monitoring, and reliability</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Security learning path</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>AI-assisted productivity tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Personal knowledge management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Financial and life-system experiments</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">go</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">kotlin</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">distributed-systems</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">opentelemetry</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">security</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">ai-tools</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
