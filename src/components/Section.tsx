import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className = '',
  children,
}) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-500 to-gold-400 rounded-full" />
        </h2>
        {subtitle && (
          <p className="mt-4 text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};
