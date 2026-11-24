import React from 'react';
import { FREELANCE_SERVICES } from '../../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-2">
            04 · Client & Freelance Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Turning Business Requirements into Reliable Software
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            I collaborate with startup founders, product managers, and business owners to build, optimize, and launch digital solutions with transparent communication and delivery ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FREELANCE_SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-indigo-400 font-semibold mb-2">
                  Service Capability 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Deliverables:
                  </div>
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400">
                <span className="text-indigo-400 font-medium">Ideal For:</span> {service.suitableFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
