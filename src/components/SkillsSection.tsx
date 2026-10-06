import { SKILL_CATEGORIES, ARCHITECTURE_PRINCIPLES } from '../data/portfolioData';
import { Layers, Server, Cpu, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 1:
        return <Server className="w-4 h-4 text-cyan-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-teal-400" />;
      default:
        return <Activity className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Skills & Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            技術能力分群與工程架構深度
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            拒絕無意義的百分比進度條。以生產環境落地經驗、架構角色與核心技術棧具體呈現。
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {category.subtitle}
                    </div>
                  </div>
                </div>

                {/* Skill Badges with Role and Context */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[11px] text-slate-500 hidden sm:inline">
                          — {skill.highlight}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-emerald-400 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Architecture Principles Sub-section */}
        <div id="principles" className="pt-8 border-t border-white/[0.06]">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-1.5">
              Engineering Principles
            </div>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              堅持的四大系統架構設計準則
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              指導日常架構設計、代碼審查與故障覆盤的底層價值觀。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ARCHITECTURE_PRINCIPLES.map((principle) => (
              <div
                key={principle.code}
                className="p-5 rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400 mb-2">
                    // PRINCIPLE_{principle.code}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
