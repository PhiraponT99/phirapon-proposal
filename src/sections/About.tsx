import { Section } from '../components/Section';
import { Code2, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About the Lab" subtitle="An exploration of robust systems, clear APIs, and automated telemetry.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
        {/* Left: Biography and Philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            Hi, I'm a <span className="text-purple-400">Backend Developer</span> &amp; <span className="text-gold-400">System Thinker</span>.
          </h3>
          <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
            I build software systems with a focus on simplicity, scalability, and long-term reliability. I view software engineering not just as code execution, but as an ongoing experiment in system design, where understanding state and runtime behavior is as important as writing the business logic.
          </p>
          <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
            Whether designing high-performance JSON/gRPC APIs in Golang, structuring typed applications in Kotlin, or configuring observability frameworks, I strive to make software that is readable, diagnosable, and resilient under load.
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
                Active Focus Areas
              </h3>
              
              <ul className="space-y-4 font-light text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span><strong>Golang &amp; Kotlin</strong> for resilient services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span><strong>Distributed Systems</strong> architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span><strong>OpenTelemetry</strong> tracing &amp; Grafana</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span><strong>AI Productivity Tools</strong> and CLI integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span><strong>Security</strong> learning &amp; identity protocols</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">go</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">kotlin</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">grpc</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">otel</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">docker</span>
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-xs font-mono">k8s</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
