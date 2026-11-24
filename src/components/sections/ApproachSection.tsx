import React from 'react';
import { ENGINEERING_APPROACH } from '../../data/portfolioData';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            05 · Engineering Principles
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Approach Engineering & Delivery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A disciplined engineering process prioritizing maintainability, error handling, and long-term business reliability over fragile quick-fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ENGINEERING_APPROACH.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-extrabold text-indigo-500/50 mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
