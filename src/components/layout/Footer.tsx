import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[#060910] border-t border-slate-900 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">{PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>Full-Stack & Mobile Application Engineer</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Stack</a>
            <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-900/60 text-center text-[11px] text-slate-600">
          Engineered with modern React, TypeScript & Tailwind CSS. Designed for recruiters and engineering leads.
        </div>
      </div>
    </footer>
  );
};
