import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Twitter, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-white/[0.06]">
      {/* Subtle Radial Ambient Lighting (Deep Cyan & Emerald tones, not purple) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 tracking-wide">
              {PERSONAL_INFO.availabilityStatus}
            </span>
          </div>

          {/* Headline - Balanced Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            構建高吞吐後端架構與
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-400">
              自主決策 AI Agent 核心
            </span>
          </h1>

          {/* Positioning & Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            我是 <strong className="text-slate-200 font-semibold">{PERSONAL_INFO.name} ({PERSONAL_INFO.englishName})</strong>，{PERSONAL_INFO.headline}。<br className="hidden sm:inline" />
            {PERSONAL_INFO.valueProp}
          </p>

          {/* 2 CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 shadow-md shadow-emerald-500/15 active:scale-98 cursor-pointer"
            >
              <span>查看精選專案</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.2] rounded-lg transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <span>聯絡我 / 合作洽詢</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="pt-4 flex items-center justify-center gap-5 text-slate-400">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              aria-label="Email Me"
              className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency: 4 Quantified Engineering Proof Metrics */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
