import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Layers, Activity, Cloud, BrainCircuit, ShieldCheck, Compass } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'Backend API Design',
      description: 'Designing typed endpoints (REST, gRPC, GraphQL) that are self-documenting, performant under concurrency, and simple for client developers to consume.',
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      tags: ['JSON', 'gRPC', 'Protobuf', 'OpenAPI'],
    },
    {
      title: 'Observability & Monitoring',
      description: 'Integrating structured logs, distributed tracing, and metrics to ensure that production issues can be identified and diagnosed before they impact customers.',
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      tags: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Tempo'],
    },
    {
      title: 'Cloud Native Systems',
      description: 'Containerizing and deploying microservices to Docker and Kubernetes, configuring infrastructure with safety-focused and repeatable patterns.',
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      tags: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    },
    {
      title: 'AI-assisted Productivity Tools',
      description: 'Customizing CLI scripts, code helpers, and agent interfaces using large language models to automate routine tasks and enhance local workflows.',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      tags: ['LLMs', 'Prompting', 'CLI', 'Automation'],
    },
    {
      title: 'Security Learning Path',
      description: 'Studying common vulnerabilities, identity protocols (OAuth2/OIDC), secure configuration practices, and defense-in-depth engineering principles.',
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      tags: ['OAuth2', 'OIDC', 'OWASP', 'TLS'],
    },
    {
      title: 'Personal Knowledge Systems',
      description: 'Modeling technical notes, system references, and documentation using digital gardens, linking concepts to build a searchable knowledge repository.',
      icon: <Compass className="w-6 h-6 text-purple-400" />,
      tags: ['Markdown', 'Obsidian', 'Second Brain', 'Docs'],
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
