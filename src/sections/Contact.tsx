import React from 'react';
import { Section } from '../components/Section';
import { Mail, ArrowUpRight, MessageSquare } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'phirapon.m@outlook.com',
      href: 'mailto:phirapon.m@outlook.com',
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      description: 'Reach out directly for engineering inquiries, questions, or collaboration ideas.',
    },
    {
      name: 'GitHub',
      value: 'github.com/PhiraponT99',
      href: 'https://github.com/PhiraponT99',
      icon: <GithubIcon className="w-6 h-6 text-purple-400" />,
      description: 'View source code repositories, open-source tools, and system experiments.',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/phirapon-m',
      href: 'https://www.linkedin.com',
      icon: <LinkedinIcon className="w-6 h-6 text-purple-400" />,
      description: 'Connect professionally, view my industry experience, and discuss tech.',
    },
  ];

  return (
    <Section
      id="contact"
      title="Start a Conversation"
      subtitle="Have an idea, collaboration, or technical problem worth exploring? Feel free to reach out."
    >
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-6 rounded-2xl bg-navy-800/20 border border-slate-800/80 backdrop-blur-md hover:border-purple-500/30 hover:bg-navy-800/40 transition-all duration-300 text-left"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  {link.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-1">{link.name}</h4>
              <p className="text-xs font-mono text-gold-400 mb-4">{link.value}</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {link.description}
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send message via {link.name.toLowerCase()}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
