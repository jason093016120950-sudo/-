/**
 * Portfolio Data Configuration
 * Centralized data for projects, technical domains, and personal credentials.
 * Easily modifiable for customization.
 */

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fintech' | 'realtime' | 'observability';
  categoryLabel: string;
  year: string;
  impactHeadline: string;
  summary: string;
  previewImage: string;
  metrics: ProjectMetric[];
  techStack: string[];
  architectureSteps: string[];
  keyChallenge: string;
  solution: string;
  githubUrl: string;
  demoUrl: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "陳泊華",
  englishName: "Bowen Chen",
  headline: "Full-Stack Developer & AI Systems Engineer",
  valueProp: "專注於高可用後端架構、跨平台應用與 AI Agent 整合。以工程嚴謹性平衡分散式並發、低延遲資料傳輸與智慧模型決策。",
  location: "台北 (Taipei, Taiwan) · Remote Available",
  email: "jason093016120950@gmail.com",
  avatarImage: "/src/assets/images/avatar_bowen_developer_1791288479977.jpg",
  availabilityStatus: "開放高階全端架構與 AI 系統顧問合作",
  socials: {
    github: "https://github.com/bowenchen-dev",
    linkedin: "https://linkedin.com/in/bowenchen-dev",
    twitter: "https://x.com/bowenchen_dev",
    email: "mailto:jason093016120950@gmail.com",
  },
  stats: [
    { value: "3.2M+", label: "日均 Agent 決策調度", note: "高並行異步處置" },
    { value: "99.99%", label: "生產環境可用性 SLA", note: "雙活容災架構" },
    { value: "12,000", label: "TPS 尖峰交易吞吐", note: "零掉單冪等防護" },
    { value: "5+ 年", label: "分散式系統實戰經驗", note: "全端端到端工程" },
  ]
};

export const ABOUT_PHILOSOPHY = [
  {
    title: "工程簡約與架構韌性",
    description: "堅持可維護性與可觀測性高於過度工程。在面對複雜分散式系統時，始終圍繞『冪等性』、『背壓保護』與『故障隔離』建立清晰邊界，確保系統在非預期極端流量下依然能優雅降級。"
  },
  {
    title: "AI Agent 系統化落地",
    description: "超越傳統單純提示詞調用，專注於長流程狀態機（Temporal/LangGraph）編排、向量檢索（RAG）資料管線，以及多工具並行調度的狀態一致性，使大模型能夠安全、可復原地下達業務決策。"
  },
  {
    title: "全鏈路全端視野",
    description: "具備從底層 Linux 核心探針（eBPF）、高吞吐後端服務（Go/Python/Kafka），到高效能前端互動（React/WebAssembly/CRDT）的端到端實踐力，消除各技術孤島間的溝通與整合損耗。"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agentic-workflow-engine",
    title: "Agentic Workflow Engine",
    category: "ai",
    categoryLabel: "AI & 分散式調度",
    year: "2026",
    impactHeadline: "突破並行工具呼叫限制，日均處理 320 萬+ 次 Agent 決策，端到端延遲降低 38%",
    summary: "專為複雜長流程與自主決策設計的分散式 Agent 調度引擎。透過有向無環圖 (DAG) 編排、狀態機持久化與背壓機制，解決大型語言模型 Tool Calling 超時與重試失序問題。",
    previewImage: "/src/assets/images/project_agent_engine_1791288424354.jpg",
    metrics: [
      { label: "每日調度量", value: "3.2M+ 次" },
      { label: "平均延遲縮減", value: "-38%" },
      { label: "並行呼叫成功率", value: "99.94%" },
    ],
    techStack: ["Python", "Go", "Temporal", "Gemini API", "Redis Streams", "Docker"],
    architectureSteps: [
      "意圖與規劃解析：LLM 迅速提取工作目標並產生動態有向無環依賴圖 (DAG)",
      "Temporal 狀態機持久化：保障工作流遭遇網路中斷或服務重啟時可安全斷點續傳",
      "Go Worker Pool 異步分發：多線程並行呼叫外部金融 API、SQL 查詢與向量庫",
      "Redis Streams 背壓緩衝：針對下游客戶端進行自適應流式傳輸與防突波調節"
    ],
    keyChallenge: "異步工具呼叫中的死鎖與重試衝突，尤其當多個 Agent 同時依賴共同共享資源時容易引發狀態分歧。",
    solution: "設計分散式樂觀鎖與動態超時熔斷器，結合嚴格依賴拓撲排序，使 50+ 異質 API 在極端高並行下依然保持狀態確定性。",
    githubUrl: "https://github.com/bowenchen-dev/agentic-workflow-engine",
    demoUrl: "https://agentic-engine-demo.internal"
  },
  {
    id: "novapay-distributed-ledger",
    title: "NovaPay Distributed Ledger",
    category: "fintech",
    categoryLabel: "高並發分散式記帳",
    year: "2025 - 2026",
    impactHeadline: "支撐電商購物節 12,000 TPS 尖峰交易，實現分散式兩階段提交與冪等重試零掉單",
    summary: "金融級複式簿記（Double-Entry Bookkeeping）帳務核心。採用事件溯源（Event Sourcing）與 SAGA 補償機制，提供高並發環境下的絕對資金一致性保證。",
    previewImage: "/src/assets/images/project_novapay_ledger_1791288440419.jpg",
    metrics: [
      { label: "尖峰吞吐", value: "12,000 TPS" },
      { label: "帳務掉單率", value: "0.00%" },
      { label: "P99 延遲", value: "14ms" },
    ],
    techStack: ["Go (Golang)", "gRPC", "PostgreSQL", "Apache Kafka", "Redis Sentinel", "Kubernetes"],
    architectureSteps: [
      "邊界網關：基於 Token Bucket 演算法限流，搭配 Client Request ID 執行冪等驗證",
      "Kafka Partition Log：依 Account Hash 分區循序寫入，消除跨節點競爭",
      "Go 帳務引擎：內存快照 + Write-Ahead Logging (WAL) 達到低於 15ms 快速響應",
      "非同步對帳稽核：後台定時掃描並核對銀行清算流水與內部日記帳平衡"
    ],
    keyChallenge: "促銷期間熱點商戶帳戶鎖競爭（Hotspot Account Contention）導致大量執行緒排隊卡頓。",
    solution: "透過記憶體微批次寫入（Micro-batching Commits）與自適應分段帳戶鎖，將熱點更新延遲由 210ms 劇降至 14ms。",
    githubUrl: "https://github.com/bowenchen-dev/novapay-distributed-ledger",
    demoUrl: "https://novapay-ledger-demo.internal"
  },
  {
    id: "crdt-realtime-sync",
    title: "Omnichannel Real-time Sync",
    category: "realtime",
    categoryLabel: "WebAssembly 即時協作",
    year: "2025",
    impactHeadline: "基於 CRDT 與 Rust Wasm 實現百人同畫布零衝突並行編輯，客戶端記憶體開銷縮減 65%",
    summary: "適用於無邊界白板與多維表格的即時多向同步引擎。透過 Rust 編譯為 WebAssembly 處理歷史版本樹剪枝與狀態向量比對，貫徹離線優先（Local-First）體驗。",
    previewImage: "/src/assets/images/project_crdt_sync_1791288453538.jpg",
    metrics: [
      { label: "同屏協作人數", value: "100+ 人" },
      { label: "記憶體降低", value: "65%" },
      { label: "本地操作反饋", value: "<1ms" },
    ],
    techStack: ["TypeScript", "Rust", "WebAssembly", "CRDT (Yjs)", "WebSockets", "WebRTC"],
    architectureSteps: [
      "本地樂觀更新：用戶動作直接於瀏覽器即時渲染，零網路阻塞感",
      "Rust Wasm 核心：因果關係樹 (Causal Tree) 快速合併，保證無鎖無衝突收斂",
      "邊緣 WebSocket Hub：狀態廣播、心跳檢測與增量差異 (Delta Update) 壓縮",
      "離線 IndexedDB 緩存：斷網期間持續操作，重連後自動三向合併"
    ],
    keyChallenge: "長生命週期白板中累積數十萬次刪除修改，CRDT 墓碑節點（Tombstones）導致記憶體飆升與操作卡頓。",
    solution: "開發因果樹分段垃圾回收演算法與定態快照替換，成功壓縮 82% 墓碑資料，大幅改善低配設備運算效能。",
    githubUrl: "https://github.com/bowenchen-dev/realtime-crdt-engine",
    demoUrl: "https://crdt-sync-demo.internal"
  },
  {
    id: "devlens-observability",
    title: "DevLens Observability Platform",
    category: "observability",
    categoryLabel: "雲原生鏈路可觀測性",
    year: "2024 - 2025",
    impactHeadline: "整合分散式鏈路追蹤與 eBPF 零侵入探針，系統平均故障排除時間 (MTTR) 縮短 55%",
    summary: "企業級微服務鏈路拓撲與異常關聯診斷系統。無縫解析分散式 Span 調用鏈，結合時序列式資料庫 ClickHouse 提供毫秒級多維度關聯查詢與火災圖分析。",
    previewImage: "/src/assets/images/project_devlens_telemetry_1791288465758.jpg",
    metrics: [
      { label: "MTTR 縮短", value: "-55%" },
      { label: "eBPF 探針開銷", value: "<1.2% CPU" },
      { label: "日誌查詢速度", value: "50 GB/s" },
    ],
    techStack: ["React", "ClickHouse", "OpenTelemetry", "Tailwind CSS", "Python", "eBPF"],
    architectureSteps: [
      "零侵入數據採集：Linux eBPF 探針無代碼攔截系統內核 Syscall 與網路延遲",
      "OTel Collector 清洗：統一 trace/metric/log 格式並標記上下文 Metadata",
      "ClickHouse 存儲：藉由向量化執行引擎支援 10 億級 Span 毫秒級快速過濾",
      "互動式拓撲 UI：React 畫布即時渲染微服務健康色票與鏈路關鍵路徑瓶頸"
    ],
    keyChallenge: "極高基數（High-cardinality）標籤下的跨服務調用鏈檢索，傳統關聯資料庫面臨嚴重 I/O 瓶頸。",
    solution: "設計時序預聚合理論與點查索引策略，搭配稀疏索引，將百萬級追蹤日誌檢索時間壓縮至 300ms 內。",
    githubUrl: "https://github.com/bowenchen-dev/devlens-observability",
    demoUrl: "https://devlens-demo.internal"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Interactive",
    subtitle: "用戶體驗與跨平台客戶端",
    skills: [
      { name: "React 19 & Next.js", level: "Core", highlight: "Server Components, Suspense 架構" },
      { name: "TypeScript", level: "Advanced", highlight: "型別系統設計、泛型演算、嚴格防護" },
      { name: "WebAssembly (Rust)", level: "Production", highlight: "高算力模組、音訊與協作演算法整合" },
      { name: "Tailwind CSS & UI/UX", level: "Design-minded", highlight: "設計系統、響應式佈局、微互動微動效" },
      { name: "State Machines & CRDT", level: "Specialist", highlight: "XState, Yjs, Local-First 離線優先架構" },
      { name: "Performance Profiling", level: "Audit", highlight: "Core Web Vitals, 記憶體洩漏診斷與優化" }
    ]
  },
  {
    title: "Backend & Distributed Systems",
    subtitle: "高並發微服務與資料儲存",
    skills: [
      { name: "Go (Golang)", level: "Core", highlight: "高吞吐併發協同、微服務通道設計" },
      { name: "Python", level: "Core", highlight: "FastAPI, 異步 I/O, AI 工具調度" },
      { name: "PostgreSQL & ClickHouse", level: "Advanced", highlight: "讀寫分離、時序列式儲存、查詢優化" },
      { name: "Redis & Sentinel", level: "In-memory", highlight: "分散式鎖、快取穿透防禦、Stream 消息" },
      { name: "Kafka & gRPC", level: "Messaging", highlight: "高吞吐事件流、Protocol Buffers 契約" },
      { name: "Distributed Transactions", level: "Architecture", highlight: "2PC, SAGA 補償事務、冪等性防護" }
    ]
  },
  {
    title: "AI Systems & Data Orchestration",
    subtitle: "智慧 Agent 與模型工程",
    skills: [
      { name: "Agentic Orchestration", level: "Specialist", highlight: "Temporal / LangGraph 狀態機長流程" },
      { name: "Tool Calling & Schemas", level: "Production", highlight: "動態工具路由、超時重試與結果驗證" },
      { name: "RAG & Vector Search", level: "Pipelines", highlight: "混合檢索、動態分塊、Re-ranking 重排序" },
      { name: "Gemini API Integration", level: "Advanced", highlight: "結構化輸出、多模態上下文窗口管理" },
      { name: "Evaluation & Guardrails", level: "Quality", highlight: "提示詞防注入、輸出確定性檢驗" }
    ]
  },
  {
    title: "DevOps & Cloud Observability",
    subtitle: "雲原生部署與可靠性保證",
    skills: [
      { name: "Kubernetes & Docker", level: "Infra", highlight: "容器化編排、滾動更新、HPA 自動擴展" },
      { name: "OpenTelemetry & eBPF", level: "Telemetry", highlight: "分散式 Trace 鏈路追蹤、內核級低開銷監控" },
      { name: "CI/CD & GitHub Actions", level: "Automation", highlight: "自動化測試、安全掃描、無縫發布流水線" },
      { name: "Linux Systems & Networks", level: "Deep Dive", highlight: "TCP/IP 調優、內核參數優化、安全加固" }
    ]
  }
];

export const ARCHITECTURE_PRINCIPLES = [
  {
    code: "01",
    title: "冪等性與最終一致性",
    description: "在不可靠的分散式網路中，假定任何網路請求都會丟失或重複。透過全域唯一定位符與防重放快取，保證多次執行結果確定無誤。"
  },
  {
    code: "02",
    title: "背壓保護與優雅降級",
    description: "避免系統在洪峰衝擊時雪崩。在邊界設置令牌桶限流，於內部微服務採用異步隊列削峰，在資源吃緊時犧牲非核心功能保護關鍵鏈路。"
  },
  {
    code: "03",
    title: "可觀測性作為一等公民",
    description: "「看不見的系統就無法維護」。代碼交付的同時必須具備結構化日誌、分散式 Trace 標籤與業務指標，讓問題在用戶回報前被捕捉。"
  },
  {
    code: "04",
    title: "抗過度工程的簡約哲學",
    description: "簡單是可靠的前提。不盲目追求新奇框架，以具體業務吞吐與團隊維護成本為衡量準繩，每一層抽象都必須具有明確的價值支撐。"
  }
];
