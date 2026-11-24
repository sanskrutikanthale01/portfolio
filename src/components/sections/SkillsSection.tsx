import React from 'react';
import { SKILL_GROUPS } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            02 · Technical Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Engineering Stack & Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Technological depth categorized by production execution. Every technology listed has been deployed, integrated, or maintained in live user-facing environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-indigo-400 font-semibold">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                {group.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-200 hover:border-indigo-500/40 hover:text-white transition-all"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] text-indigo-400 font-semibold uppercase">
                        · {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
