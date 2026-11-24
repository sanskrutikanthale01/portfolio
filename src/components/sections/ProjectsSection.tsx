import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from '../projects/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'mobile' | 'fullstack' | 'independent'>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'flagship') return proj.type === 'flagship';
    if (filter === 'independent') return proj.type === 'independent';
    if (filter === 'mobile') return proj.category === 'mobile';
    if (filter === 'fullstack') return proj.category === 'fullstack' || proj.category === 'backend';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase mb-2">
              01 · Engineering Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Production Systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              A curated selection of production applications and independent platforms showcasing native mobile bridges, resilient backends, healthcare reliability, and store releases.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'flagship', label: 'Core Flagships' },
              { id: 'mobile', label: 'React Native & Mobile' },
              { id: 'fullstack', label: 'Full-Stack & Backend' },
              { id: 'independent', label: 'Independent SaaS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.type === 'flagship'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
