import React, { useState } from 'react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`group relative rounded-2xl bg-slate-900/70 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured
          ? 'border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5'
          : 'border-slate-800/80 hover:border-slate-700'
      }`}
    >
      {/* Top Header & Tags */}
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider ${
                project.type === 'flagship'
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                  : project.type === 'independent'
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}
            >
              {project.type}
            </span>
            {project.platforms && (
              <span className="text-[11px] text-slate-400 font-mono">
                {project.platforms.join(' · ')}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {project.role}
          </span>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-300 leading-snug mb-4">
          {project.tagline}
        </p>

        {/* High-Level Overview */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {project.overview}
        </p>

        {/* Key Metrics / Highlights */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-left">
                <div className="text-[10px] uppercase font-mono text-slate-400">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Architecture Accordion / Deep Dive */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>{expanded ? 'Hide Deep Dive Architecture' : 'View Deep Dive Architecture'}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expanded && (
              <div className="mt-4 space-y-3 pt-3 border-t border-slate-800/70 animate-in fade-in duration-200">
                {project.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-800/40 border border-slate-800/80">
                    <h5 className="text-xs font-bold text-slate-200 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      {arch.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {arch.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Engineering Value / Real World Impact */}
        <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-semibold mb-1">
            Engineering Value Delivered
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {project.engineeringValue}
          </p>
          {project.businessApplication && (
            <div className="mt-2 pt-2 border-t border-indigo-500/10 text-[11px] text-slate-400">
              <span className="text-indigo-300 font-medium">Domain Scope:</span> {project.businessApplication}
            </div>
          )}
        </div>
      </div>

      {/* Technologies Tag Cloud Footer */}
      <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800/80 flex flex-wrap gap-1.5 items-center">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-800/80 border border-slate-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
