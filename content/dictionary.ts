export type Locale = "en" | "vi";

export const profile = {
  name: "Phạm Dương Hòa",
  nameAscii: "Pham Duong Hoa",
  email: "hoakg2000@gmail.com",
  github: "https://github.com/hoakg2000",
  linkedin: "https://linkedin.com/in/hoakg2000",
  cv: "/PhamDuongHoa-CV.pdf",
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  kind: string;
  tagline: string;
  summary: string;
  flow: string[];
  highlights: string[];
  stack: string[];
  repo: string;
};

export type Role = {
  period: string;
  title: string;
  company: string;
  points: string[];
};

const en = {
  meta: {
    title: "Phạm Dương Hòa — Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer in Ho Chi Minh City. Next.js and React architecture, NestJS backends, real-time systems and AI-driven engineering workflows.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    theme: "Toggle colour theme",
    language: "Đổi sang tiếng Việt",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Senior Fullstack Developer · Ho Chi Minh City",
    headlineA: "I build frontends that scale,",
    headlineB: "and the AI workflows that ship them",
    headlineEm: "faster.",
    intro:
      "Four years across enterprise web apps, e-commerce admin systems and real-time products. Today I architect React and Next.js interfaces at FPT Software — and write the agent configurations that audit them before a human reviewer does.",
    ctaWork: "See selected work",
    ctaCv: "Résumé (PDF)",
    statusLabel: "Currently",
    status: "Senior Frontend Developer at FPT Software",
    focusLabel: "Focus",
    focus: "Next.js architecture, NestJS, AI agent workflows",
  },
  stats: [
    { value: "80%", label: "less hands-on coding through custom Claude Code and Codex CLI workflows" },
    { value: "4 → 1", label: "months — delivery cycle for two production e-commerce admin modules" },
    { value: ">90%", label: "unit-test coverage across frontend and backend modules" },
    { value: "200 → 0", label: "critical SonarQube warnings resolved on a microservice codebase" },
  ],
  work: {
    eyebrow: "Selected work",
    title: "Three systems, each solving a problem I actually had.",
    flowLabel: "How it flows",
    highlightsLabel: "Engineering notes",
    stackLabel: "Stack",
    source: "Source on GitHub",
    projects: [
      {
        slug: "secretary",
        index: "01",
        name: "Secretary",
        kind: "AI personal assistant · 2026",
        tagline: "An assistant that reads my inbox so my ledger and calendar keep themselves up to date.",
        summary:
          "A NestJS backend behind a Next.js dashboard and a React Native app. Incoming email is filtered, classified by Gemini and turned into balance updates, calendar events or short digests. A chat agent with long-term memory can answer questions about any of it — and decides on its own when it is worth starting a conversation.",
        flow: ["Gmail Pub/Sub", "Pre-filter", "BullMQ", "Gemini", "Ledger · Calendar · Telegram"],
        highlights: [
          "Rule-based pre-filtering (blacklist, bank and e-wallet formats) routes mail before it reaches the model, so tokens are only spent where judgement is needed.",
          "Hybrid memory on PostgreSQL: pgvector cosine similarity combined with full-text search, weighted by exponential time decay.",
          "Function calling lets the model choose between vector memory, Google Calendar and Gmail tools; idempotency keys prevent duplicate entries on worker retries.",
        ],
        stack: ["NestJS", "Prisma", "PostgreSQL", "pgvector", "Redis", "Gemini", "Next.js", "React Native"],
        repo: "https://github.com/hoakg2000/secretary",
      },
      {
        slug: "airdevice",
        index: "02",
        name: "AirDevice",
        kind: "Cross-device peripheral streaming · 2026",
        tagline: "Scan a QR code and your phone becomes the desktop's camera — no app install.",
        summary:
          "A drop-in web component for any desktop web app. It pairs with a phone through a QR-encoded session, then streams the phone camera peer-to-peer over WebRTC. A lighter snapshot mode skips WebRTC entirely and uploads a single photo. Built for flows like eKYC, where users need to photograph a document from a laptop.",
        flow: ["Desktop web component", "Signaling (NestJS + Redis)", "Mobile PWA", "P2P video"],
        highlights: [
          "Shared WebRTC core implements the Perfect Negotiation pattern to avoid SDP glare, with trickle ICE for sub-second connection setup.",
          "The desktop client ships as a single IIFE bundle mounted inside Shadow DOM, so host apps embed it with one script tag and no style collisions.",
          "pnpm monorepo with Zod contracts shared by server and clients; Docker Compose brings up Redis, signaling and both clients in one command.",
        ],
        stack: ["TypeScript", "WebRTC", "Socket.IO", "NestJS", "Redis", "React", "pnpm workspaces", "Docker"],
        repo: "https://github.com/hoakg2000/airdevice",
      },
      {
        slug: "chess",
        index: "03",
        name: "ChessAnalyzer",
        kind: "Browser chess analysis · 2026",
        tagline: "Pull any chess.com game and review it with Stockfish 18, entirely in the browser.",
        summary:
          "Search a chess.com username, pick a game, and step through it with an evaluation graph and move classification. The same engine powers a puzzle trainer and a play-against-computer mode. No backend: the engine runs client-side, so analysis costs nothing to host.",
        flow: ["chess.com API", "PGN", "Stockfish 18 (Web Worker)", "Eval graph · Blunder detection"],
        highlights: [
          "Stockfish 18 compiled to WebAssembly runs in a dedicated Web Worker, keeping the board responsive during deep searches.",
          "A promise-based UCI hook converts engine output — centipawns and mate scores — into a single evaluation scale for charting.",
          "React 19 with the React Compiler, Vite and Tailwind CSS; long-cached engine assets served from Vercel.",
        ],
        stack: ["React 19", "TypeScript", "Vite", "Stockfish WASM", "chess.js", "Recharts", "Tailwind CSS"],
        repo: "https://github.com/hoakg2000/chess",
      },
    ] satisfies Project[],
    also: {
      label: "Also built",
      name: "Human Manager CRM",
      text: "HR management system with a relational MySQL schema, Express REST API and audit logging for transfers, edits and promotions.",
      stack: "MySQL · Express.js · React",
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Where the work happened.",
    roles: [
      {
        period: "05/2026 — Present",
        title: "Senior Frontend Developer",
        company: "FPT Software",
        points: [
          "Develop and audit complex UI components and third-party integrations for enterprise web applications.",
          "Engineered AI-driven workflows — agent.md and skills.md configurations for Claude Code and Codex CLI with built-in audit loops — cutting coding effort by 80% and overall task effort by 60%.",
        ],
      },
      {
        period: "02/2024 — 01/2026",
        title: "Frontend Developer",
        company: "Toyar Inc (FidoVN)",
        points: [
          "Architected the frontend for two core e-commerce admin modules: 20+ CRUD screens, role-based access control and data synchronised between internal and customer portals.",
          "Compressed a four-month plan into one month to hit launch, shipping both modules with zero critical post-release bugs.",
          "Acted as the technical bridge between design and backend, checking UI specs against API contracts before they became blockers.",
        ],
      },
      {
        period: "02/2022 — 12/2023",
        title: "Software Developer",
        company: "TMA Solutions",
        points: [
          "Built microservice backend modules on Java Spring and Apache Pulsar, standardising SDK configuration and message-broker behaviour.",
          "Led the initial architecture of a React platform demonstrating Pub/Sub features and mentored incoming engineers.",
          "Raised unit-test coverage above 90% on both frontend and backend and brought 200+ critical SonarQube warnings to zero.",
        ],
      },
    ] satisfies Role[],
  },
  skills: {
    eyebrow: "Capabilities",
    title: "A frontend specialist who is comfortable all the way down.",
    groups: [
      {
        name: "Frontend architecture",
        note: "SSR / ISR, App Router, design-system tooling",
        items: ["TypeScript", "Next.js", "React", "pnpm monorepo", "Storybook", "Tailwind CSS", "SCSS"],
      },
      {
        name: "Backend & data",
        note: "Schema design and plain SQL when the ORM gets in the way",
        items: ["Node.js", "NestJS", "Express", "Java Spring", "PostgreSQL", "pgvector", "MySQL", "Prisma"],
      },
      {
        name: "AI workflows",
        note: "Agents that write, then audit, their own output",
        items: ["Claude Code", "Codex CLI", "MCP", "LLM APIs", "Prompt engineering", "Agent configuration"],
      },
      {
        name: "Real-time",
        note: "",
        items: ["WebRTC", "WebSockets", "REST API design"],
      },
      {
        name: "DevOps",
        note: "",
        items: ["Docker", "Kubernetes ops", "Nginx", "CI/CD"],
      },
    ],
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Credentials",
    awardsLabel: "Awards",
    awards: [
      { name: "Outstanding Newcomer", org: "Toyar Inc (FidoVN)", year: "2024" },
      { name: "3rd Prize, Vietnam National Olympiad in Informatics", org: "OLP", year: "2020" },
      { name: "1st Prize, Informatics Olympiad", org: "Ho Chi Minh City Open University", year: "2019, 2020" },
    ],
    certsLabel: "Certifications",
    certs: [
      { name: "Claude Certified Architect — Foundation", org: "Anthropic", year: "940 / 1000" },
      { name: "EF SET English Certificate", org: "EF Standard English Test", year: "C1 Advanced" },
    ],
    educationLabel: "Education",
    education: { name: "Bachelor's Degree", org: "Ho Chi Minh City Open University", year: "2018 — 2022" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a product that needs a careful engineer?",
    text: "I'm open to senior frontend and fullstack roles, and to conversations about bringing AI tooling into a team's daily workflow. Email is the fastest way to reach me.",
    location: "Ho Chi Minh City, Vietnam · GMT+7",
  },
  footer: {
    built: "Designed and built by hand with Next.js, Tailwind CSS and Framer Motion.",
    top: "Back to top",
  },
};

export type Dictionary = typeof en;

const vi: Dictionary = {
  meta: {
    title: "Phạm Dương Hòa — Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer tại TP. Hồ Chí Minh. Kiến trúc Next.js và React, backend NestJS, hệ thống thời gian thực và quy trình phát triển ứng dụng AI.",
  },
  nav: {
    work: "Dự án",
    experience: "Kinh nghiệm",
    skills: "Kỹ năng",
    contact: "Liên hệ",
    theme: "Đổi giao diện sáng/tối",
    language: "Switch to English",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Senior Fullstack Developer · TP. Hồ Chí Minh",
    headlineA: "Tôi xây dựng frontend có thể mở rộng,",
    headlineB: "cùng quy trình AI giúp sản phẩm ra mắt",
    headlineEm: "nhanh hơn.",
    intro:
      "Bốn năm làm việc với ứng dụng web doanh nghiệp, hệ thống quản trị e-commerce và sản phẩm thời gian thực. Hiện tôi thiết kế kiến trúc giao diện React và Next.js tại FPT Software — và viết cấu hình agent để rà soát code trước cả khi người review đọc tới.",
    ctaWork: "Xem dự án tiêu biểu",
    ctaCv: "Tải CV (PDF)",
    statusLabel: "Hiện tại",
    status: "Senior Frontend Developer tại FPT Software",
    focusLabel: "Trọng tâm",
    focus: "Kiến trúc Next.js, NestJS, quy trình AI agent",
  },
  stats: [
    { value: "80%", label: "công sức viết code được giảm nhờ quy trình Claude Code và Codex CLI tự cấu hình" },
    { value: "4 → 1", label: "tháng — chu kỳ phát triển hai module quản trị e-commerce lên production" },
    { value: ">90%", label: "độ bao phủ unit test cho cả module frontend lẫn backend" },
    { value: "200 → 0", label: "cảnh báo nghiêm trọng của SonarQube được xử lý trên hệ thống microservice" },
  ],
  work: {
    eyebrow: "Dự án tiêu biểu",
    title: "Ba hệ thống, mỗi cái giải quyết một vấn đề tôi thực sự gặp.",
    flowLabel: "Luồng xử lý",
    highlightsLabel: "Ghi chú kỹ thuật",
    stackLabel: "Công nghệ",
    source: "Mã nguồn trên GitHub",
    projects: [
      {
        slug: "secretary",
        index: "01",
        name: "Secretary",
        kind: "Trợ lý AI cá nhân · 2026",
        tagline: "Một trợ lý đọc hộp thư để sổ thu chi và lịch hẹn tự cập nhật.",
        summary:
          "Backend NestJS phục vụ dashboard Next.js và ứng dụng React Native. Email đến được lọc, phân loại bằng Gemini rồi chuyển thành biến động số dư, sự kiện lịch hoặc bản tóm tắt ngắn. Một chat agent có bộ nhớ dài hạn trả lời mọi câu hỏi về những dữ liệu đó — và tự quyết định khi nào nên chủ động bắt chuyện.",
        flow: ["Gmail Pub/Sub", "Bộ lọc sơ bộ", "BullMQ", "Gemini", "Sổ thu chi · Lịch · Telegram"],
        highlights: [
          "Bộ lọc theo luật (blacklist, mẫu thông báo ngân hàng và ví điện tử) phân luồng email trước khi tới mô hình, chỉ tốn token ở nơi thực sự cần suy luận.",
          "Bộ nhớ lai trên PostgreSQL: kết hợp độ tương đồng cosine của pgvector với full-text search, có trọng số suy giảm theo thời gian.",
          "Function calling cho phép mô hình tự chọn giữa bộ nhớ vector, Google Calendar và Gmail; khóa idempotency ngăn ghi trùng khi worker chạy lại.",
        ],
        stack: ["NestJS", "Prisma", "PostgreSQL", "pgvector", "Redis", "Gemini", "Next.js", "React Native"],
        repo: "https://github.com/hoakg2000/secretary",
      },
      {
        slug: "airdevice",
        index: "02",
        name: "AirDevice",
        kind: "Truyền dữ liệu ngoại vi đa thiết bị · 2026",
        tagline: "Quét mã QR, điện thoại trở thành camera của máy tính — không cần cài ứng dụng.",
        summary:
          "Một web component nhúng được vào mọi ứng dụng web trên desktop. Nó ghép cặp với điện thoại qua phiên được mã hóa trong QR, rồi truyền camera điện thoại theo kiểu peer-to-peer bằng WebRTC. Chế độ snapshot nhẹ hơn bỏ qua WebRTC và chỉ tải lên một ảnh. Phù hợp cho các luồng như eKYC, khi người dùng cần chụp giấy tờ trong lúc thao tác trên laptop.",
        flow: ["Web component desktop", "Signaling (NestJS + Redis)", "Mobile PWA", "Video P2P"],
        highlights: [
          "Lõi WebRTC dùng chung áp dụng pattern Perfect Negotiation để tránh xung đột SDP, kết hợp trickle ICE để kết nối dưới một giây.",
          "Client desktop đóng gói thành một file IIFE duy nhất, gắn trong Shadow DOM — ứng dụng chủ chỉ cần một thẻ script và không lo xung đột CSS.",
          "pnpm monorepo với contract Zod dùng chung giữa server và client; Docker Compose khởi chạy Redis, signaling và cả hai client bằng một lệnh.",
        ],
        stack: ["TypeScript", "WebRTC", "Socket.IO", "NestJS", "Redis", "React", "pnpm workspaces", "Docker"],
        repo: "https://github.com/hoakg2000/airdevice",
      },
      {
        slug: "chess",
        index: "03",
        name: "ChessAnalyzer",
        kind: "Phân tích cờ vua trên trình duyệt · 2026",
        tagline: "Lấy bất kỳ ván đấu nào trên chess.com và phân tích bằng Stockfish 18, hoàn toàn trong trình duyệt.",
        summary:
          "Tìm username chess.com, chọn ván, rồi xem lại từng nước với biểu đồ đánh giá và phân loại nước đi. Cùng engine đó vận hành chế độ giải đố và chơi với máy. Không cần backend: engine chạy phía client nên chi phí phân tích bằng không.",
        flow: ["chess.com API", "PGN", "Stockfish 18 (Web Worker)", "Biểu đồ đánh giá · Phát hiện blunder"],
        highlights: [
          "Stockfish 18 biên dịch sang WebAssembly chạy trong Web Worker riêng, giữ bàn cờ mượt mà khi engine tính toán sâu.",
          "Hook UCI dựa trên Promise quy đổi kết quả engine — centipawn và điểm chiếu hết — về cùng một thang đánh giá để vẽ biểu đồ.",
          "React 19 với React Compiler, Vite và Tailwind CSS; tài nguyên engine được cache dài hạn trên Vercel.",
        ],
        stack: ["React 19", "TypeScript", "Vite", "Stockfish WASM", "chess.js", "Recharts", "Tailwind CSS"],
        repo: "https://github.com/hoakg2000/chess",
      },
    ],
    also: {
      label: "Dự án khác",
      name: "Human Manager CRM",
      text: "Hệ thống quản lý nhân sự với schema MySQL quan hệ, REST API Express và audit log cho điều chuyển, chỉnh sửa và thăng chức.",
      stack: "MySQL · Express.js · React",
    },
  },
  experience: {
    eyebrow: "Kinh nghiệm",
    title: "Những nơi công việc diễn ra.",
    roles: [
      {
        period: "05/2026 — Nay",
        title: "Senior Frontend Developer",
        company: "FPT Software",
        points: [
          "Phát triển và rà soát các UI component phức tạp cùng tích hợp bên thứ ba cho ứng dụng web doanh nghiệp.",
          "Xây dựng quy trình AI — cấu hình agent.md và skills.md cho Claude Code và Codex CLI kèm vòng lặp tự kiểm tra — giảm 80% công sức viết code và 60% tổng công sức mỗi task.",
        ],
      },
      {
        period: "02/2024 — 01/2026",
        title: "Frontend Developer",
        company: "Toyar Inc (FidoVN)",
        points: [
          "Thiết kế kiến trúc frontend cho hai module quản trị e-commerce cốt lõi: hơn 20 màn hình CRUD, phân quyền theo vai trò (RBAC) và đồng bộ dữ liệu giữa cổng nội bộ và cổng khách hàng.",
          "Rút kế hoạch bốn tháng xuống một tháng để kịp ngày ra mắt, đưa cả hai module lên production không có lỗi nghiêm trọng nào sau phát hành.",
          "Là cầu nối kỹ thuật giữa đội thiết kế và backend, đối chiếu đặc tả UI với API contract trước khi chúng trở thành điểm nghẽn.",
        ],
      },
      {
        period: "02/2022 — 12/2023",
        title: "Software Developer",
        company: "TMA Solutions",
        points: [
          "Xây dựng module backend microservice trên Java Spring và Apache Pulsar, chuẩn hóa cấu hình SDK và hành vi message broker.",
          "Dẫn dắt kiến trúc ban đầu cho nền tảng React minh họa tính năng Pub/Sub và hướng dẫn kỹ sư mới.",
          "Nâng độ bao phủ unit test lên trên 90% cho cả frontend và backend, đưa hơn 200 cảnh báo nghiêm trọng của SonarQube về 0.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Năng lực",
    title: "Chuyên sâu frontend, vững vàng tới tận tầng dưới.",
    groups: [
      {
        name: "Kiến trúc frontend",
        note: "SSR / ISR, App Router, công cụ cho design system",
        items: ["TypeScript", "Next.js", "React", "pnpm monorepo", "Storybook", "Tailwind CSS", "SCSS"],
      },
      {
        name: "Backend & dữ liệu",
        note: "Thiết kế schema và viết SQL thuần khi ORM cản trở",
        items: ["Node.js", "NestJS", "Express", "Java Spring", "PostgreSQL", "pgvector", "MySQL", "Prisma"],
      },
      {
        name: "Quy trình AI",
        note: "Agent tự viết code, rồi tự rà soát kết quả",
        items: ["Claude Code", "Codex CLI", "MCP", "LLM API", "Prompt engineering", "Cấu hình agent"],
      },
      {
        name: "Thời gian thực",
        note: "",
        items: ["WebRTC", "WebSockets", "Thiết kế REST API"],
      },
      {
        name: "DevOps",
        note: "",
        items: ["Docker", "Vận hành Kubernetes", "Nginx", "CI/CD"],
      },
    ],
  },
  recognition: {
    eyebrow: "Thành tích",
    title: "Chứng nhận",
    awardsLabel: "Giải thưởng",
    awards: [
      { name: "Nhân viên mới xuất sắc", org: "Toyar Inc (FidoVN)", year: "2024" },
      { name: "Giải Ba, Olympic Tin học Sinh viên Việt Nam", org: "OLP", year: "2020" },
      { name: "Giải Nhất, Olympic Tin học", org: "Trường ĐH Mở TP. Hồ Chí Minh", year: "2019, 2020" },
    ],
    certsLabel: "Chứng chỉ",
    certs: [
      { name: "Claude Certified Architect — Foundation", org: "Anthropic", year: "940 / 1000" },
      { name: "Chứng chỉ tiếng Anh EF SET", org: "EF Standard English Test", year: "C1 Advanced" },
    ],
    educationLabel: "Học vấn",
    education: { name: "Cử nhân", org: "Trường ĐH Mở TP. Hồ Chí Minh", year: "2018 — 2022" },
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Bạn cần một kỹ sư cẩn trọng cho sản phẩm của mình?",
    text: "Tôi sẵn sàng cho các vị trí senior frontend và fullstack, cũng như những cuộc trao đổi về việc đưa công cụ AI vào quy trình làm việc hằng ngày của đội ngũ. Email là cách nhanh nhất để liên lạc với tôi.",
    location: "TP. Hồ Chí Minh, Việt Nam · GMT+7",
  },
  footer: {
    built: "Thiết kế và xây dựng thủ công với Next.js, Tailwind CSS và Framer Motion.",
    top: "Lên đầu trang",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, vi };
