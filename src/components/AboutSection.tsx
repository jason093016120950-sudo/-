import { useState } from 'react';
import { PERSONAL_INFO, ABOUT_PHILOSOPHY } from '../data/portfolioData';
import { Terminal, ShieldCheck, Zap, Layers, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            About Me
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            用嚴謹工程原則，解決真實業務中的高並發與 AI 系統挑戰
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            我不盲目追逐新奇工具，而是專注於系統的邊界清晰度、數據一致性與故障時的優雅自我修復能力。
          </p>
        </div>

        {/* Content Layout: Left side philosophy essays, Right side developer profile card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols): 3 Philosophy Essays */}
          <div className="lg:col-span-7 space-y-6">
            {ABOUT_PHILOSOPHY.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    {index === 0 && <ShieldCheck className="w-4 h-4" />}
                    {index === 1 && <Zap className="w-4 h-4" />}
                    {index === 2 && <Layers className="w-4 h-4" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {index + 1}. {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Quick Principles Banner */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Single-Point-of-Failure
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Deterministic Agent State
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Type-Safe Full-Stack Delivery
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Developer Profile & Hardware/Software Setup Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] space-y-6 sticky top-24">
              
              {/* Photo & Core Bio */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/[0.12] bg-[#161a26] relative">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.avatarImage}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900/40 to-slate-900 text-emerald-300 font-bold text-xl">
                      BC
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.name}
                    <span className="ml-1.5 text-sm font-normal text-slate-400">({PERSONAL_INFO.englishName})</span>
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">
                    {PERSONAL_INFO.headline}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Technical Profile Details */}
              <div className="space-y-3 pt-2 border-t border-white/[0.08] text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">核心架構語言</span>
                  <span className="font-mono text-slate-200">Go, TypeScript, Python, Rust (Wasm)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">系統吞吐量實證</span>
                  <span className="font-mono text-emerald-400 tabular-nums">12,000 TPS / 3.2M Agent Req</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">資料流與協作</span>
                  <span className="font-mono text-slate-200">Kafka, Redis, CRDT (Yjs), Temporal</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">雲原生與遙測</span>
                  <span className="font-mono text-slate-200">Kubernetes, OpenTelemetry, eBPF</span>
                </div>
              </div>

              {/* Engineering Quote / Philosophy Quote */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 leading-relaxed italic">
                “Reliable distributed systems are not built on perfection, but on assuming partial failure as the standard state and building resilient recovery pathways.”
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
