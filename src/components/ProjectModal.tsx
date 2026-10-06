import { useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, ArrowRight, CheckCircle2, Play, Activity, Layers, ShieldCheck, Database, RefreshCw, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'architecture' | 'simulation';
  onClose: () => void;
}

export default function ProjectModal({ project, initialTab = 'architecture', onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'simulation'>(initialTab);
  
  // Interactive Simulator States
  // 1. Agent engine state
  const [agentTask, setAgentTask] = useState<'finance' | 'refactor' | 'audit'>('finance');
  const [agentStep, setAgentStep] = useState<number>(0);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  // 2. NovaPay state
  const [txAmount, setTxAmount] = useState<number>(1500);
  const [idempotencyKey, setIdempotencyKey] = useState<string>('REQ-9834-TOKEN-A');
  const [txHistory, setTxHistory] = useState<Array<{ id: string; amount: number; status: string; latency: string; time: string }>>([
    { id: 'REQ-9834-TOKEN-A', amount: 1500, status: 'COMMITTED (WAL)', latency: '12ms', time: '12:04:02' },
  ]);
  const [isSubmittingTx, setIsSubmittingTx] = useState(false);

  // 3. CRDT state
  const [crdtTextA, setCrdtTextA] = useState('Distributed Consensus v2.4');
  const [crdtTextB, setCrdtTextB] = useState('Distributed Consensus v2.4');
  const [syncStatus, setSyncStatus] = useState<'synced' | 'diverged'>('synced');

  if (!project) return null;

  const runAgentSimulation = () => {
    setIsSimulatingAgent(true);
    setAgentStep(1);
    setSimLogs(['[00ms] 接收任務需求，Gemini 2.5 Flash 解析意圖中...']);

    setTimeout(() => {
      setAgentStep(2);
      setSimLogs((prev) => [...prev, '[120ms] DAG 依賴圖建立完成：產生 4 個異步子任務，Temporal 狀態機開始排程']);
    }, 600);

    setTimeout(() => {
      setAgentStep(3);
      setSimLogs((prev) => [...prev, '[310ms] Go Worker Pool 並行拉取外圍 API (Tool: FetchStock, Tool: QuerySQL, Tool: VetRisk)']);
    }, 1300);

    setTimeout(() => {
      setAgentStep(4);
      setSimLogs((prev) => [...prev, '[490ms] Redis Streams 背壓匯整完成，綜合決策輸出 (總耗時: 490ms，無死鎖)']);
      setIsSimulatingAgent(false);
    }, 2000);
  };

  const handleSendTransaction = () => {
    setIsSubmittingTx(true);
    setTimeout(() => {
      // Check idempotency
      const existing = txHistory.find(t => t.id === idempotencyKey);
      if (existing) {
        setTxHistory(prev => [
          { id: idempotencyKey, amount: txAmount, status: 'IDEMPOTENT CACHED (零重複扣款)', latency: '3ms', time: new Date().toLocaleTimeString() },
          ...prev
        ]);
      } else {
        setTxHistory(prev => [
          { id: idempotencyKey, amount: txAmount, status: 'COMMITTED (WAL + SAGA OK)', latency: '14ms', time: new Date().toLocaleTimeString() },
          ...prev
        ]);
      }
      setIsSubmittingTx(false);
      // Generate a new random idempotency key suggestion
      setIdempotencyKey(`REQ-${Math.floor(1000 + Math.random() * 9000)}-TOKEN-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`);
    }, 350);
  };

  const handleCRDTSync = () => {
    setCrdtTextB(crdtTextA);
    setSyncStatus('synced');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative w-full max-w-4xl bg-[#0c0e15] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-start justify-between bg-[#10131d]">
          <div className="space-y-1 pr-6">
            <div className="text-xs text-emerald-400 font-mono flex items-center gap-2">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {project.impactHeadline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors shrink-0"
            aria-label="關閉視窗"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="flex border-b border-white/[0.08] px-6 bg-[#0c0e15] text-xs font-medium">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            架構設計與技術決策
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>互動模擬展示 (Live Sandbox)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {activeTab === 'architecture' ? (
            <div className="space-y-6">
              
              {/* Architecture Steps Breakdown */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  資料流向與分層架構 (Data Flow & Pipeline)
                </h4>
                <div className="space-y-2.5">
                  {project.architectureSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                  <div className="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
                    <span>核心工程挑戰 (Key Challenge)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.keyChallenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                    <span>技術解法與架構決策 (Solution & Rationale)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Quantitative Metrics */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  生產指標驗證 (Verified Benchmarks)
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                      <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack List */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  使用技術與函式庫
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Interactive Sandbox Simulator */
            <div className="space-y-6">
              {project.id === 'agentic-workflow-engine' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#121520] border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-300">選擇模擬場景：</span>
                      <div className="flex gap-1.5 text-xs">
                        <button
                          onClick={() => setAgentTask('finance')}
                          className={`px-2.5 py-1 rounded transition-colors ${
                            agentTask === 'finance' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          多來源金融數據解析
                        </button>
                        <button
                          onClick={() => setAgentTask('refactor')}
                          className={`px-2.5 py-1 rounded transition-colors ${
                            agentTask === 'refactor' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          自主程式碼審計
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={runAgentSimulation}
                        disabled={isSimulatingAgent}
                        className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-2 transition-all disabled:opacity-50"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>{isSimulatingAgent ? '調度執行中...' : '觸發 DAG 流程執行'}</span>
                      </button>
                      <span className="text-xs text-slate-500">
                        點擊觀察 Temporal 工作流、Go 並行 Worker 與 Redis Streams 背壓狀態
                      </span>
                    </div>
                  </div>

                  {/* DAG Flow Visualizer */}
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className={`p-3 rounded-xl border transition-all ${agentStep >= 1 ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-white/[0.06] bg-white/[0.02] text-slate-500'}`}>
                      <div className="font-mono font-bold">NODE 01</div>
                      <div className="mt-1 text-[11px]">意圖解析 (LLM)</div>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all ${agentStep >= 2 ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-white/[0.06] bg-white/[0.02] text-slate-500'}`}>
                      <div className="font-mono font-bold">NODE 02</div>
                      <div className="mt-1 text-[11px]">Temporal 狀態機</div>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all ${agentStep >= 3 ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-white/[0.06] bg-white/[0.02] text-slate-500'}`}>
                      <div className="font-mono font-bold">NODE 03</div>
                      <div className="mt-1 text-[11px]">Go Worker 并發</div>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all ${agentStep >= 4 ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-white/[0.06] bg-white/[0.02] text-slate-500'}`}>
                      <div className="font-mono font-bold">NODE 04</div>
                      <div className="mt-1 text-[11px]">Redis 背壓匯整</div>
                    </div>
                  </div>

                  {/* Terminal Execution Logs */}
                  <div className="p-4 rounded-xl bg-black border border-white/[0.08] font-mono text-xs space-y-1.5 text-slate-300">
                    <div className="text-slate-500 pb-1 border-b border-white/[0.06] flex items-center justify-between">
                      <span>EXECUTION CONSOLE & TRACE</span>
                      <span>STATUS: {isSimulatingAgent ? 'RUNNING' : agentStep === 4 ? 'SUCCESS' : 'IDLE'}</span>
                    </div>
                    {simLogs.length === 0 ? (
                      <p className="text-slate-600">等待觸發執行...</p>
                    ) : (
                      simLogs.map((log, i) => (
                        <p key={i} className="text-emerald-400">
                          {log}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              )}

              {project.id === 'novapay-distributed-ledger' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#121520] border border-white/[0.08] space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1">扣款金額 (NTD):</label>
                        <input
                          type="number"
                          value={txAmount}
                          onChange={(e) => setTxAmount(Number(e.target.value))}
                          className="w-full bg-[#08090d] border border-white/[0.12] rounded-lg px-3 py-1.5 text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">冪等性 Request ID:</label>
                        <input
                          type="text"
                          value={idempotencyKey}
                          onChange={(e) => setIdempotencyKey(e.target.value)}
                          className="w-full bg-[#08090d] border border-white/[0.12] rounded-lg px-3 py-1.5 text-emerald-300 font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <button
                        onClick={handleSendTransaction}
                        disabled={isSubmittingTx}
                        className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold rounded-lg text-xs transition-all disabled:opacity-50"
                      >
                        {isSubmittingTx ? '處理中...' : '發送高並發記帳請求'}
                      </button>
                      <span className="text-xs text-slate-500">
                        連續點擊相同 Request ID 可測試冪等防重複機制
                      </span>
                    </div>
                  </div>

                  {/* Transaction Ledger Table */}
                  <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                    <div className="px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.08] text-xs font-semibold text-slate-400">
                      即時帳務 WAL 流水日誌 (Double-Entry Log)
                    </div>
                    <div className="divide-y divide-white/[0.04] text-xs">
                      {txHistory.map((tx, idx) => (
                        <div key={idx} className="p-3 flex items-center justify-between font-mono">
                          <div>
                            <span className="text-slate-300">{tx.id}</span>
                            <span className="text-slate-500 ml-2">NT${tx.amount}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-400">{tx.status}</span>
                            <span className="text-slate-500 tabular-nums">{tx.latency}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'crdt-realtime-sync' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#121520] border border-white/[0.08] space-y-3">
                    <div className="text-xs text-slate-400">
                      CRDT 離線優先與狀態向量無鎖合併模擬：
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-slate-400 mb-1 flex items-center justify-between">
                          <span>客戶端 A (台北節點 - 可編輯)</span>
                          <span className="text-emerald-400">Online</span>
                        </div>
                        <input
                          type="text"
                          value={crdtTextA}
                          onChange={(e) => {
                            setCrdtTextA(e.target.value);
                            setSyncStatus('diverged');
                          }}
                          className="w-full bg-[#08090d] border border-white/[0.12] rounded-lg px-3 py-2 text-white font-mono"
                        />
                      </div>
                      <div>
                        <div className="text-slate-400 mb-1 flex items-center justify-between">
                          <span>客戶端 B (東京節點 - 副本)</span>
                          <span className={syncStatus === 'synced' ? 'text-emerald-400' : 'text-amber-400'}>
                            {syncStatus === 'synced' ? 'Synced' : 'Waiting Merge'}
                          </span>
                        </div>
                        <input
                          type="text"
                          readOnly
                          value={crdtTextB}
                          className="w-full bg-[#08090d]/60 border border-white/[0.06] rounded-lg px-3 py-2 text-slate-400 font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <button
                        onClick={handleCRDTSync}
                        className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold rounded-lg text-xs transition-all"
                      >
                        模擬 Wasm 因果樹廣播與合併 (CRDT Merge)
                      </button>
                      <span className="text-xs text-slate-500">
                        {syncStatus === 'synced' ? '兩端狀態向量已完全收斂' : '差異未合併，點擊按鈕執行 Rust Wasm 狀態比對'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'devlens-observability' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#121520] border border-white/[0.08] space-y-3 text-xs">
                    <div className="text-slate-400">
                      OpenTelemetry 鏈路追蹤與 eBPF 內核探針視覺化：
                    </div>
                    {/* Trace Waterfall Simulated Representation */}
                    <div className="space-y-2 font-mono">
                      <div className="space-y-1">
                        <div className="flex justify-between text-slate-400">
                          <span>GET /api/v2/orders/checkout</span>
                          <span className="text-emerald-400 tabular-nums">48ms (Total)</span>
                        </div>
                        <div className="h-3 w-full bg-emerald-500/30 rounded-sm"></div>
                      </div>
                      <div className="space-y-1 pl-4">
                        <div className="flex justify-between text-slate-400">
                          <span>auth-service.verify_jwt</span>
                          <span className="text-teal-400 tabular-nums">4ms</span>
                        </div>
                        <div className="h-2 w-1/6 bg-teal-500/40 rounded-sm"></div>
                      </div>
                      <div className="space-y-1 pl-4">
                        <div className="flex justify-between text-slate-400">
                          <span>inventory.check_stock [eBPF Probe]</span>
                          <span className="text-teal-400 tabular-nums">18ms</span>
                        </div>
                        <div className="h-2 w-2/5 bg-teal-500/40 rounded-sm ml-6"></div>
                      </div>
                      <div className="space-y-1 pl-4">
                        <div className="flex justify-between text-slate-400">
                          <span>payment.execute_2pc</span>
                          <span className="text-cyan-400 tabular-nums">22ms</span>
                        </div>
                        <div className="h-2 w-1/2 bg-cyan-500/40 rounded-sm ml-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-white/[0.08] bg-[#10131d] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            REF: {project.id} · Production Grade
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 hover:text-white border border-white/[0.08] flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub 儲存庫</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-xs font-semibold text-slate-950 transition-colors cursor-pointer"
            >
              關閉視窗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
