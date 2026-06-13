import React from 'react';
import { Section } from '../components/Section';
import { Briefcase, FlaskConical, Milestone, Users } from 'lucide-react';

export const Proposal: React.FC = () => {
  const opportunities = [
    {
      title: 'Technical Prototyping',
      description: 'Quickly testing concepts by standing up clean, well-tested backend services or CLI tools before committing to full production buildout.',
      icon: <FlaskConical className="w-5 h-5 text-gold-400" />,
    },
    {
      title: 'Observability Audits',
      description: 'Assisting in setting up distributed tracing and Grafana dashboards for existing microservices to diagnose hard-to-reproduce pipeline errors.',
      icon: <Milestone className="w-5 h-5 text-gold-400" />,
    },
    {
      title: 'Developer Tooling & AI',
      description: 'Collaborating on internal CLI programs, automated knowledge pipelines, or building agentic LLM integrations that streamline internal operations.',
      icon: <Users className="w-5 h-5 text-gold-400" />,
    },
  ];

  return (
    <Section
      id="proposal"
      title="The Collaboration Proposal"
      subtitle="Izuna LAB is designed as an open research and proposal space. Here is how we can collaborate."
    >
      <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-navy-800/20 border border-slate-800/80 backdrop-blur-md p-8 md:p-12 relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
            Research-Driven Software Development
          </h3>
        </div>

        <p className="text-slate-400 font-light leading-relaxed mb-8">
          This site serves as a sandboxed platform for demonstrating what happens when clean design meets reliable system execution. Rather than building commercial, feature-bloated web apps, the goal of Izuna LAB is to explore focused prototypes, investigate infrastructure pipelines, and build tools that help solve real engineering bottlenecks.
        </p>

        <h4 className="text-sm font-mono text-gold-400 tracking-wider uppercase mb-6">
          Areas of Collaboration
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {opportunities.map((item) => (
            <div key={item.title} className="p-5 rounded-xl bg-slate-900/30 border border-slate-900 flex flex-col justify-between">
              <div>
                <div className="mb-3">{item.icon}</div>
                <h5 className="text-white font-medium text-sm mb-2">{item.title}</h5>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-900 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white font-medium text-sm">Have a system design bottleneck or a custom tool idea?</p>
            <p className="text-slate-500 text-xs font-light mt-1">Let's discuss how we can build a lightweight proof of concept.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase text-navy-900 bg-gold-400 hover:bg-gold-500 transition-colors shadow-md shadow-gold-500/10"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </Section>
  );
};
