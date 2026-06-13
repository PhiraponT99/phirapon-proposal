import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  link?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  tags = [],
  link,
  className = '',
}) => {
  const CardContent = (
    <div className={`glow-card h-full flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-navy-800/40 border border-slate-800/60 backdrop-blur-md ${className}`}>
      <div>
        {icon && (
          <div className="mb-5 text-purple-400 inline-flex p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-white tracking-tight mb-3 flex items-center gap-2 group-hover:text-gold-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900/60 text-slate-400 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full focus:outline-none"
      >
        {CardContent}
      </a>
    );
  }

  return <div className="group h-full">{CardContent}</div>;
};
