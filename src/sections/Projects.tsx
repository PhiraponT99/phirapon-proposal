import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Sparkles, Video, FileText, BarChart3 } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Izu Tarot',
      description: 'A reflective tarot web app with Ask Izu, designed as a gentle interface for self-reflection rather than prediction.',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
    },
    {
      title: 'IzuMind',
      description: 'A video-to-knowledge pipeline that turns long-form content into structured notes, summaries, and reusable knowledge.',
      icon: <Video className="w-6 h-6 text-purple-400" />,
      tags: ['Python', 'OpenAI Whisper', 'Vector Database', 'Markdown'],
    },
    {
      title: 'Slip2Sheet',
      description: 'A personal finance experiment that extracts expense data from slip images and organizes it into Google Sheets.',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      tags: ['Golang', 'Tesseract OCR', 'Google Sheets API', 'CLI'],
    },
    {
      title: 'Batch Monitoring',
      description: 'A reliability-focused monitoring concept for daily batch processing using observability, dashboards, and alerting.',
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      tags: ['OpenTelemetry', 'Grafana', 'Docker Compose', 'Alertmanager'],
    },
  ];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A collection of prototypes, CLI utilities, and dashboards built to explore new concepts and technologies."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((proj) => (
          <Card
            key={proj.title}
            title={proj.title}
            description={proj.description}
            icon={proj.icon}
            tags={proj.tags}
          />
        ))}
      </div>
    </Section>
  );
};
