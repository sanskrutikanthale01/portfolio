import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    // In production, integrate with Web3Forms, Formspree, or your backend endpoint
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Inquiry from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for Roles & High-Value Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let's Build Something Meaningful.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              Whether you are looking to hire a Full-Stack/Mobile Engineer for your team, modernize an existing application, or build an MVP from scratch, my inbox is open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Quick Contact & Info */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Direct Reach</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Feel free to copy email or reach out on professional channels.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-500 mb-1">Email Address</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-200 truncate">
                        {PERSONAL_INFO.email}
                      </span>
                      <button
                        onClick={copyEmail}
                        className="px-2 py-1 text-[10px] font-mono font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      >
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-500 mb-1">Location</div>
                    <div className="text-xs text-slate-300">{PERSONAL_INFO.location}</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-500 mb-1">Collaboration Scope</div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      Full-time Remote · Contract Engineering · Freelance Delivery · Production Troubleshooting
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4 mt-8">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 underline"
                >
                  LinkedIn
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="md:col-span-3 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Tell me about your product requirements or role expectations.
              </p>

              {status === 'success' ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center">
                  Thank you! Your email client has been launched with your inquiry details.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message / Requirements</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details regarding your tech stack, project timeline, or interview process..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Send Direct Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
