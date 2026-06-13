import React from 'react';
import { Section } from '../components/Section';
import { Briefcase, FlaskConical, Milestone, Users } from 'lucide-react';

export const Proposal: React.FC = () => {
  const opportunities = [
    {
      title: 'Prototype Thinking',
      description: 'Turn unclear ideas into small testable prototypes.',
      icon: <FlaskConical className="w-5 h-5 text-gold-400" />,
    },
    {
      title: 'Backend & Reliability',
      description: 'Design APIs, services, monitoring flows, and operational dashboards.',
      icon: <Milestone className="w-5 h-5 text-gold-400" />,
    },
    {
      title: 'AI-assisted Systems',
      description: 'Explore practical AI workflows that reduce manual work and cognitive load.',
      icon: <Users className="w-5 h-5 text-gold-400" />,
    },
  ];

  return (
    <Section
      id="proposal"
      title="How I Want to Build"
      subtitle="Building systems that combine engineering discipline with human context."
    >
      <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-navy-800/20 border border-slate-800/80 backdrop-blur-md p-8 md:p-12 relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
            Engineering + Human Context
          </h3>
        </div>

        <p className="text-slate-400 font-light leading-relaxed mb-8">
          I am interested in working on systems that combine engineering discipline with human context — tools that are reliable, understandable, and genuinely useful in daily life or business operations.
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
            <p className="text-white font-medium text-sm">Have an idea, collaboration, or technical problem worth exploring?</p>
            <p className="text-slate-500 text-xs font-light mt-1">Let's start a conversation and build something meaningful.</p>
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
