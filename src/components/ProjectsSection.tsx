import { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'architecture' | 'simulation'>('architecture');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const openProjectModal = (project: Project, tab: 'architecture' | 'simulation') => {
    setSelectedProject(project);
    setModalInitialTab(tab);
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              Featured Projects
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              精選工程專案與分散式架構實踐
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              每個專案皆具備明確的量化業務價值、架構取捨考量與生產環境等級的容錯設計。
            </p>
          </div>

          {/* Interactive Category Filter Controls (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10131d] border border-white/[0.08] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              全部專案 ({PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'ai'
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & 分散式
            </button>
            <button
              onClick={() => setSelectedCategory('fintech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'fintech'
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              高並發金流
            </button>
            <button
              onClick={() => setSelectedCategory('realtime')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'realtime'
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              即時協作
            </button>
          </div>
        </div>

        {/* Project Cards Grid (2x2 layout on desktop, responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasImgError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col overflow-hidden shadow-lg shadow-black/20"
              >
                {/* Project Image Preview with Fallback */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#141824] border-b border-white/[0.08]">
                  {!hasImgError ? (
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#121624] to-[#0a0c14] text-slate-400">
                      <Cpu className="w-10 h-10 text-emerald-400/50 mb-2" />
                      <span className="text-xs font-mono">{project.title} Architecture Preview</span>
                    </div>
                  )}

                  {/* Subtle Gradient Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed category & year at bottom of image overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/[0.08]">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-500">·</span>
                      <span>{project.year}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                      SLA 99.99%
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Quantified Impact Headline */}
                    <p className="text-xs sm:text-sm font-medium text-emerald-400 leading-relaxed bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/15">
                      {project.impactHeadline}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Metrics Strip (Tabular Numerals) */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06] text-center font-mono">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="px-1">
                        <div className="text-sm font-bold text-slate-200 tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags (Clean unboxed style or minimal badges) */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => openProjectModal(project, 'architecture')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer py-1"
                    >
                      <span>架構解析 & 資料流</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openProjectModal(project, 'simulation')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors cursor-pointer"
                        title="開啟互動沙盒測試"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                        aria-label={`查看 ${project.title} 的 GitHub 原始碼`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Architecture & Simulation Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialTab={modalInitialTab}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
