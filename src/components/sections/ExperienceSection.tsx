import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            03 · Professional Background
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work History & Engineering Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Progressive trajectory across enterprise products, international client engagements, and rapid agile delivery teams.
          </p>
        </div>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-indigo-400 mt-0.5">
                    {exp.company} {exp.location && <span className="text-slate-500 font-normal">· {exp.location}</span>}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/40 self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {exp.summary}
              </p>

              <div className="mb-6 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                    <span className="text-indigo-400 font-bold mt-0.5">›</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-800/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Credentials */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <h3 className="text-lg font-bold text-white tracking-tight mb-6 flex items-center gap-2">
            <span className="text-indigo-400">🎓</span> Education & Professional Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/70">
                <div className="text-sm font-bold text-white mb-1">
                  {edu.degree}
                </div>
                <div className="text-xs font-semibold text-indigo-400 mb-2">
                  {edu.institution} <span className="text-slate-500 font-normal font-mono">({edu.period})</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
