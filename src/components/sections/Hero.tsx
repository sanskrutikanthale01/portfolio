import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Engineering Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
            <span>Full-Stack & Mobile Systems Engineer</span>
          </div>

          {/* Main Value Proposition Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Building Digital Products.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
              Solving Real-World Problems.
            </span>
          </h1>

          {/* Narrative Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
            I engineer high-performance cross-platform mobile apps, reactive web platforms, and fault-tolerant backend architectures. Specializing in <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">React.js</span>, and <span className="text-white font-medium">Node.js</span>, I bridge business logic with production releases across Google Play, Apple App Store, and cloud infrastructure.
          </p>

          {/* Core Focus Badges */}
          <div className="flex flex-wrap gap-2.5 mb-10 text-xs font-mono text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-1.5">
              <span className="text-cyan-400 font-bold">⚡</span> React Native & Hybrid Bridges
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-1.5">
              <span className="text-indigo-400 font-bold">◈</span> Full-Stack MERN Architecture
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> App Store & Play Store CI/CD
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">⚙</span> Business Automation Engines
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Production Case Studies</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm transition-all duration-200"
            >
              <span>Hire for Freelance / Contracts</span>
            </a>
          </div>
        </div>

        {/* Live Metrics Row */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
