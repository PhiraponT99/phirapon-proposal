import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Sparkles, Video, FileText, BarChart3 } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Izu Tarot',
      description: 'A reflective tarot reading web application incorporating an AI "Ask Izu" counselor. Users draw cards and receive personalized, context-aware guidance powered by Gemini APIs.',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
    },
    {
      title: 'IzuMind',
      description: 'A video-to-knowledge pipeline that processes long-form lecture and instructional video materials, transcribes audio, extracts primary concepts, and structures them into searchable knowledge graphs.',
      icon: <Video className="w-6 h-6 text-purple-400" />,
      tags: ['Python', 'OpenAI Whisper', 'Vector Database', 'Markdown'],
    },
    {
      title: 'Slip2Sheet',
      description: 'A receipt OCR scanning pipeline that extracts transaction data from payment slips, formats the output into clean JSON, and syncs directly to a Google Sheets expense tracker.',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      tags: ['Golang', 'Tesseract OCR', 'Google Sheets API', 'CLI'],
    },
    {
      title: 'Batch Monitoring',
      description: 'An observability stack configuring Grafana and OpenTelemetry tracing specifically tailored to monitor end-of-day batch jobs, tracking execution reliability, bottlenecks, and error rates.',
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
