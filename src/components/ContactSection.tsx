import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Twitter, ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Contact & Inquiry
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            準備好聊聊您的下一個系統或 AI 架構了嗎？
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            無論是高階全端工程職缺、分散式後端架構顧問，或自主 Agent 系統研發，歡迎隨時來信。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (5 cols): Direct Email & Social Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Direct Email
              </div>
              <div className="p-4 rounded-xl bg-black border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-slate-200 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  title="點擊複製信箱"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">已複製！</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>複製信箱</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>通常在 24 小時內回覆電子郵件</span>
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Professional Channels
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <div>
                      <div className="text-xs font-semibold text-white">GitHub</div>
                      <div className="text-[11px] text-slate-500">開源專案與架構範例</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <div>
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-500">工作經歷與業界同仁推薦</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <div>
                      <div className="text-xs font-semibold text-white">X (Twitter)</div>
                      <div className="text-[11px] text-slate-500">技術思辨與分散式系統心得</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e111a] border border-white/[0.08] relative">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  快速傳送訊息
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-2 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-base font-semibold text-white">訊息已成功記錄！</div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    感謝您的來信，我將於 24 小時內親自透過提供之信箱與您聯繫。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        您的姓名 / 稱謂 <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例如：Alex Lin"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#08090d] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        電子信箱 (Email) <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#08090d] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      洽詢主題
                    </label>
                    <input
                      type="text"
                      placeholder="例如：高階架構師合作洽談 / AI 系統技術諮詢"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#08090d] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      詳細需求或訊息內容 <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="請簡述您的團隊現狀、面臨的架構挑戰或預計啟動的合作範疇..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#08090d] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      所有資訊僅作技術交流與業務聯繫之用。
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-emerald-500/10 active:scale-95"
                    >
                      {isSubmitting ? (
                        <span>傳送中...</span>
                      ) : (
                        <>
                          <span>傳送訊息</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
