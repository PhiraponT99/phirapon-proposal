import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Layers, Activity, Cloud, BrainCircuit, ShieldCheck, Compass } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'Backend Engineering',
      description: 'Designing and implementing clean, statically-typed JSON/gRPC APIs and distributed systems in Golang and Kotlin. I build services that are easy to maintain, performant, and scale cleanly.',
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      tags: ['Golang', 'Kotlin', 'gRPC', 'APIs'],
    },
    {
      title: 'Observability & Reliability',
      description: 'Integrating structured logging, distributed tracing, and real-time metrics. I make sure that software systems are diagnosable in production, allowing issues to be debugged before they impact users.',
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      tags: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Tempo'],
    },
    {
      title: 'Cloud Native Systems',
      description: 'Containerizing applications and managing deployments in Docker and Kubernetes. I build secure, repeatable, and containerized deployment paths.',
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      tags: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    },
    {
      title: 'AI-assisted Tooling',
      description: 'Building custom CLI tools, automations, and LLM integrations to reduce repetitive manual work and enhance local development workflows.',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      tags: ['LLMs', 'Automation', 'CLI Scripts', 'Python'],
    },
    {
      title: 'Security-Oriented Thinking',
      description: 'Adhering to secure coding practices, implementing secure identity protocols (OAuth2/OIDC), and analyzing system boundaries to protect user data.',
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      tags: ['OAuth2', 'OIDC', 'Security Best Practices'],
    },
    {
      title: 'Product & System Design',
      description: 'Bridging the gap between code and user experience. I design systems from the user\'s perspective, focusing on reducing complexity and building features that solve real needs.',
      icon: <Compass className="w-6 h-6 text-purple-400" />,
      tags: ['System Thinking', 'UX-Focused', 'Prototyping', 'Product Development'],
    },
  ];

  return (
    <Section
      id="capabilities"
      title="Capabilities"
      subtitle="The technical domains, tools, and methodologies I focus on to solve systems challenges."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {capabilities.map((cap) => (
          <Card
            key={cap.title}
            title={cap.title}
            description={cap.description}
            icon={cap.icon}
            tags={cap.tags}
          />
        ))}
      </div>
    </Section>
  );
};
