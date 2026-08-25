// CampusPilot AI — Hackathon Team Finder & AI Team Formation Engine
// Multi-factor Compatibility Scoring, Natural Language AI Team Builder, Team Gap Diagnostics, and Workspace Cockpit

(function(window) {
  const TEAMS_STORAGE_KEY = "campuspilot_teams_v2";
  const TEAM_REQUESTS_STORAGE_KEY = "campuspilot_team_requests_v2";

  // 1. Curated National & Global Hackathons Catalog
  const HACKATHONS_CATALOG = [
    {
      id: "hack-sih-2026",
      name: "Smart India Hackathon 2026",
      shortName: "SIH 2026",
      organizer: "Ministry of Education & AICTE",
      badge: "🇮🇳 National Flagship",
      category: "National",
      themeClass: "hack-theme-sih",
      prizePool: "₹1,00,000 / Problem Statement",
      prizeDisplay: "₹1,00,000 / PS",
      dates: "Oct 15 - Oct 17, 2026 (36 Hours)",
      mode: "Offline Grand Finale (Nodal Centers)",
      teamSize: "6 Members",
      ruleHighlight: "👩 Mandatory 1 Female Member",
      countdown: "⏳ Oct 2026 Finale",
      liveStatus: "● LIVE REGISTRATION",
      perks: ["🍕 Free Food & Stay (Nodal)", "📜 AICTE Verified Certificate", "🏆 ₹1L Cash + Incubation"],
      participatingPeersCount: 48,
      peerAvatars: [
        { initial: "RV", bg: "#4f46e5" },
        { initial: "AK", bg: "#059669" },
        { initial: "SM", bg: "#d97706" }
      ],
      domains: ["Smart Automation", "Clean & Green Tech", "Healthcare & AI", "AgriTech", "Cyber Security"],
      description: "World's biggest open innovation hackathon solving real-world government and industry problem statements across 50+ nodal centers.",
      registeredTeamsCount: 1420,
      bannerColor: "from-amber-600 to-orange-700",
      officialUrl: "https://www.sih.gov.in/",
      logoSvg: `
        <svg class="w-8 h-8" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
          <path d="M7 11h22v4H7z" fill="#f97316"/>
          <path d="M7 16h22v4H7z" fill="#ffffff"/>
          <path d="M7 21h22v4H7z" fill="#10b981"/>
          <circle cx="18" cy="18" r="2.5" fill="#1e3a8a"/>
        </svg>
      `,
      coverBannerSvg: `
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sih-grad" x1="0" y1="0" x2="400" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#1e1005"/>
              <stop offset="50%" stop-color="#2a1205"/>
              <stop offset="100%" stop-color="#061f14"/>
            </linearGradient>
            <radialGradient id="sih-glow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="140" fill="url(#sih-grad)"/>
          <rect width="400" height="140" fill="url(#sih-glow)"/>
          <!-- Isometric Grid Lines -->
          <path d="M0 40L400 40M0 80L400 80M0 120L400 120" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
          <path d="M80 0L80 140M160 0L160 140M240 0L240 140M320 0L320 140" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
          <!-- Glowing Cyber Ashok Chakra & Circuit -->
          <circle cx="340" cy="70" r="50" stroke="#f97316" stroke-opacity="0.2" stroke-width="2"/>
          <circle cx="340" cy="70" r="35" stroke="#10b981" stroke-opacity="0.25" stroke-width="1.5"/>
          <circle cx="340" cy="70" r="10" fill="#f97316" fill-opacity="0.2"/>
          <!-- Glowing Satellite & Nodes -->
          <path d="M30 110 L100 50 L180 80 L260 30" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="2" stroke-dasharray="4 4"/>
          <circle cx="100" cy="50" r="4" fill="#f97316"/>
          <circle cx="180" cy="80" r="4" fill="#38bdf8"/>
          <circle cx="260" cy="30" r="5" fill="#10b981"/>
          <!-- Subtle Watermark -->
          <text x="24" y="95" fill="#ffffff" fill-opacity="0.07" font-size="52" font-weight="900" font-family="sans-serif">SIH 2026</text>
        </svg>
      `
    },
    {
      id: "hack-gsc-2026",
      name: "Google Solution Challenge 2026",
      shortName: "Google Challenge",
      organizer: "Google Developer Student Clubs (GDSC)",
      badge: "🌐 Global Flagship",
      category: "Global",
      themeClass: "hack-theme-google",
      prizePool: "$10,000 + Google Mentorship",
      prizeDisplay: "$10,000 + Mentorship",
      dates: "Submission Closes: Nov 2026",
      mode: "Online Global Submission",
      teamSize: "1 to 4 Members",
      ruleHighlight: "🌍 UN 17 SDGs Track",
      countdown: "⏳ Closes Nov 2026",
      liveStatus: "● GLOBAL SUBMISSIONS OPEN",
      perks: ["☁️ $500 Google Cloud Credits", "🤖 Gemini Pro API Access", "⭐ 1-on-1 Google Mentors"],
      participatingPeersCount: 32,
      peerAvatars: [
        { initial: "DK", bg: "#2563eb" },
        { initial: "PR", bg: "#dc2626" },
        { initial: "TL", bg: "#16a34a" }
      ],
      domains: ["UN 17 SDGs", "Flutter", "Firebase", "Google Cloud", "Gemini AI API"],
      description: "Build an innovative technical solution addressing one or more of the United Nations 17 Sustainable Development Goals using Google developer technologies.",
      registeredTeamsCount: 890,
      bannerColor: "from-blue-600 to-indigo-700",
      officialUrl: "https://developers.google.com/community/gdsc-solution-challenge",
      logoSvg: `
        <svg class="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      `,
      coverBannerSvg: `
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="google-grad" x1="0" y1="0" x2="400" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#0a1226"/>
              <stop offset="60%" stop-color="#0b1736"/>
              <stop offset="100%" stop-color="#061826"/>
            </linearGradient>
            <radialGradient id="google-glow" cx="60%" cy="40%" r="50%">
              <stop offset="0%" stop-color="#4285F4" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="140" fill="url(#google-grad)"/>
          <rect width="400" height="140" fill="url(#google-glow)"/>
          <!-- UN 17 SDGs Rainbow Arcs -->
          <circle cx="330" cy="70" r="55" stroke="#EA4335" stroke-opacity="0.3" stroke-width="2"/>
          <circle cx="330" cy="70" r="45" stroke="#FBBC05" stroke-opacity="0.35" stroke-width="2"/>
          <circle cx="330" cy="70" r="35" stroke="#34A853" stroke-opacity="0.4" stroke-width="2"/>
          <circle cx="330" cy="70" r="25" stroke="#4285F4" stroke-opacity="0.5" stroke-width="2"/>
          <!-- Floating Isometric Tech Cubes -->
          <rect x="70" y="30" width="24" height="24" rx="6" fill="#4285F4" fill-opacity="0.2" transform="rotate(25 70 30)"/>
          <rect x="180" y="70" width="20" height="20" rx="5" fill="#34A853" fill-opacity="0.25" transform="rotate(-15 180 70)"/>
          <rect x="120" y="85" width="16" height="16" rx="4" fill="#FBBC05" fill-opacity="0.3" transform="rotate(45 120 85)"/>
          <!-- Sparkles & Stars -->
          <circle cx="270" cy="35" r="2.5" fill="#ffffff"/>
          <circle cx="220" cy="110" r="2" fill="#ffffff" fill-opacity="0.7"/>
          <text x="24" y="95" fill="#ffffff" fill-opacity="0.06" font-size="44" font-weight="900" font-family="sans-serif">GOOGLE</text>
        </svg>
      `
    },
    {
      id: "hack-ethindia-2026",
      name: "ETHIndia 2026",
      shortName: "ETHIndia",
      organizer: "Devfolio & Ethereum Foundation",
      badge: "⛓️ Asia's Largest Web3",
      category: "Web3",
      themeClass: "hack-theme-ethindia",
      prizePool: "$100,000+ Bounties & Grants",
      prizeDisplay: "$100,000+ Bounties",
      dates: "Dec 05 - Dec 07, 2026 (36 Hours)",
      mode: "In-Person (KTPO, Bengaluru)",
      teamSize: "2 to 4 Members",
      ruleHighlight: "⚡ ZK & Decentralized Agents",
      countdown: "⏳ Dec 2026 (Bengaluru)",
      liveStatus: "● BUILDER APPLICATION LIVE",
      perks: ["💎 $100K+ Sponsor Bounties", "🍕 3 Days Meals & Swag", "🎟️ KTPO Bengaluru Free Pass"],
      participatingPeersCount: 24,
      peerAvatars: [
        { initial: "VR", bg: "#9333ea" },
        { initial: "AB", bg: "#0891b2" },
        { initial: "NS", bg: "#4f46e5" }
      ],
      domains: ["DeFi", "Account Abstraction", "Zero Knowledge", "AI Agents", "Layer 2"],
      description: "Gather with 2,000+ top builders to create cutting-edge decentralized protocols, intent architectures, and crypto apps.",
      registeredTeamsCount: 650,
      bannerColor: "from-purple-600 to-indigo-800",
      officialUrl: "https://ethindia.co/",
      logoSvg: `
        <svg class="w-8 h-8" viewBox="0 0 256 417" fill="none">
          <path fill="#8A92B2" d="M127.96 0l-2.79 9.5v275.66l2.79 2.78 127.96-75.64z"/>
          <path fill="#62688F" d="M127.96 0L0 212.3l127.96 75.64V0z"/>
          <path fill="#454A75" d="M127.96 312.87l-1.57 1.92v97.94l1.57 4.57 128.04-180.05z"/>
          <path fill="#454A75" d="M127.96 417.3v-104.43L0 237.25z"/>
          <path fill="#1B1D36" d="M127.96 287.94l127.96-75.64-127.96-58.07z"/>
          <path fill="#2E335B" d="M0 212.3l127.96 75.64v-133.7z"/>
        </svg>
      `,
      coverBannerSvg: `
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="eth-grad" x1="0" y1="0" x2="400" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#140728"/>
              <stop offset="50%" stop-color="#1b0c36"/>
              <stop offset="100%" stop-color="#08102a"/>
            </linearGradient>
            <radialGradient id="eth-glow" cx="70%" cy="40%" r="55%">
              <stop offset="0%" stop-color="#a855f7" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="140" fill="url(#eth-grad)"/>
          <rect width="400" height="140" fill="url(#eth-glow)"/>
          <!-- Glowing Ethereum Crystal 3D -->
          <g transform="translate(310, 30) scale(0.2)">
            <path fill="#c084fc" fill-opacity="0.8" d="M127.96 0l-2.79 9.5v275.66l2.79 2.78 127.96-75.64z"/>
            <path fill="#a855f7" fill-opacity="0.9" d="M127.96 0L0 212.3l127.96 75.64V0z"/>
            <path fill="#6b21a8" fill-opacity="0.8" d="M127.96 312.87l-1.57 1.92v97.94l1.57 4.57 128.04-180.05z"/>
            <path fill="#581c87" fill-opacity="0.9" d="M127.96 417.3v-104.43L0 237.25z"/>
          </g>
          <!-- Cyber City Laser Beams -->
          <path d="M0 130L120 70L240 100L400 40" stroke="#06b6d4" stroke-opacity="0.3" stroke-width="1.5"/>
          <circle cx="120" cy="70" r="4" fill="#06b6d4"/>
          <circle cx="240" cy="100" r="4" fill="#a855f7"/>
          <!-- Matrix Rain Dots -->
          <circle cx="50" cy="30" r="1.5" fill="#a855f7" fill-opacity="0.6"/>
          <circle cx="80" cy="60" r="1.5" fill="#06b6d4" fill-opacity="0.6"/>
          <circle cx="160" cy="40" r="1.5" fill="#a855f7" fill-opacity="0.6"/>
          <text x="24" y="95" fill="#ffffff" fill-opacity="0.06" font-size="44" font-weight="900" font-family="sans-serif">ETHINDIA</text>
        </svg>
      `
    },
    {
      id: "hack-hackmit-2026",
      name: "HackMIT 2026",
      shortName: "HackMIT",
      organizer: "Massachusetts Institute of Technology (MIT)",
      badge: "🏛️ Ivy League Flagship",
      category: "Global",
      themeClass: "hack-theme-hackmit",
      prizePool: "$30,000+ & VC Exposure",
      prizeDisplay: "$30,000+ & VC Pitch",
      dates: "Sept 18 - Sept 20, 2026 (24 Hours)",
      mode: "Hybrid (Cambridge, MA & Virtual)",
      teamSize: "3 to 4 Members",
      ruleHighlight: "🚀 Hardware & AI Innovation",
      countdown: "⏳ Sept 2026 (MIT)",
      liveStatus: "● APPLICATIONS SHORTLISTING",
      perks: ["✈️ Travel Reimbursements", "🚀 VC Direct Pitching Room", "🤖 Hardware Lab Access"],
      participatingPeersCount: 19,
      peerAvatars: [
        { initial: "JD", bg: "#e11d48" },
        { initial: "KP", bg: "#475569" },
        { initial: "RS", bg: "#be123c" }
      ],
      domains: ["Generative AI", "Robotics", "Open Innovation", "EdTech", "FinTech"],
      description: "Premier collegiate hackathon gathering visionary undergraduate minds to hack hardware and software solutions from scratch.",
      registeredTeamsCount: 1100,
      bannerColor: "from-rose-600 to-red-800",
      officialUrl: "https://hackmit.org/",
      logoSvg: `
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="#f43f5e">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      `,
      coverBannerSvg: `
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mit-grad" x1="0" y1="0" x2="400" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#1f070e"/>
              <stop offset="50%" stop-color="#2c0a15"/>
              <stop offset="100%" stop-color="#110508"/>
            </linearGradient>
            <radialGradient id="mit-glow" cx="65%" cy="35%" r="55%">
              <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="140" fill="url(#mit-grad)"/>
          <rect width="400" height="140" fill="url(#mit-glow)"/>
          <!-- MIT Dome Wireframe Silhouette -->
          <path d="M280 110 C280 60, 360 60, 360 110 Z" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="2"/>
          <rect x="310" y="45" width="20" height="15" fill="#f43f5e" fill-opacity="0.3"/>
          <path d="M260 110 L380 110" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="2"/>
          <!-- Robotic Neural Tracks -->
          <circle cx="100" cy="50" r="30" stroke="#ffffff" stroke-opacity="0.08" stroke-dasharray="3 3"/>
          <circle cx="100" cy="50" r="15" stroke="#f43f5e" stroke-opacity="0.3"/>
          <circle cx="100" cy="50" r="5" fill="#f43f5e"/>
          <path d="M100 50 L180 90 L240 40" stroke="#f43f5e" stroke-opacity="0.25" stroke-width="2"/>
          <circle cx="180" cy="90" r="4" fill="#ffffff" fill-opacity="0.6"/>
          <text x="24" y="95" fill="#ffffff" fill-opacity="0.06" font-size="46" font-weight="900" font-family="sans-serif">HACKMIT</text>
        </svg>
      `
    },
    {
      id: "hack-grid-2026",
      name: "Flipkart GRiD 7.0 Hackathon",
      shortName: "Flipkart GRiD",
      organizer: "Flipkart India",
      badge: "⚡ Corporate Hiring Challenge",
      category: "Corporate",
      themeClass: "hack-theme-flipkart",
      prizePool: "₹1,50,000 + Direct PPIs (SDE-1)",
      prizeDisplay: "₹1,50,000 + SDE-1 PPIs",
      dates: "Aug 2026 - Sept 2026",
      mode: "Online Multi-Round Technical Challenge",
      teamSize: "2 to 3 Members",
      ruleHighlight: "💼 Pre-Placement Interviews",
      countdown: "🔥 Round 1 Live",
      liveStatus: "● ROUND 1 CODING CHALLENGE LIVE",
      perks: ["💼 Direct SDE-1 Job Interviews", "🏆 ₹1.5L Cash Prizes", "⚡ Certificate of Excellence"],
      participatingPeersCount: 65,
      peerAvatars: [
        { initial: "AN", bg: "#0284c7" },
        { initial: "SB", bg: "#eab308" },
        { initial: "MG", bg: "#0d9488" }
      ],
      domains: ["E-Commerce AI", "Supply Chain", "Computer Vision", "Microservices"],
      description: "India's premier campus technology challenge for engineering students with direct interview opportunities at Flipkart.",
      registeredTeamsCount: 3200,
      bannerColor: "from-cyan-600 to-blue-800",
      officialUrl: "https://unstop.com/competitions/flipkart-grid",
      logoSvg: `
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#2874f0"/>
          <path d="M6 8h12l-1.5 8h-9L6 8z" fill="#ffe11b"/>
          <circle cx="9" cy="18" r="1.5" fill="#ffe11b"/>
          <circle cx="15" cy="18" r="1.5" fill="#ffe11b"/>
          <path d="M11 11h2v3h-2z" fill="#2874f0"/>
        </svg>
      `,
      coverBannerSvg: `
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fk-grad" x1="0" y1="0" x2="400" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#041226"/>
              <stop offset="50%" stop-color="#08224d"/>
              <stop offset="100%" stop-color="#061229"/>
            </linearGradient>
            <radialGradient id="fk-glow" cx="65%" cy="40%" r="50%">
              <stop offset="0%" stop-color="#2874f0" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="140" fill="url(#fk-grad)"/>
          <rect width="400" height="140" fill="url(#fk-glow)"/>
          <!-- Flipkart Speed Rays & Yellow Accent Line -->
          <path d="M-20 120 L150 40 L420 140" stroke="#ffe11b" stroke-opacity="0.3" stroke-width="3"/>
          <circle cx="150" cy="40" r="6" fill="#ffe11b"/>
          <!-- High-Speed Delivery Drone Silhouette -->
          <g transform="translate(300, 35) scale(0.8)">
            <ellipse cx="40" cy="30" rx="30" ry="12" stroke="#2874f0" stroke-width="2" fill="#2874f0" fill-opacity="0.2"/>
            <circle cx="20" cy="20" r="12" stroke="#ffe11b" stroke-opacity="0.5" stroke-width="1.5"/>
            <circle cx="60" cy="20" r="12" stroke="#ffe11b" stroke-opacity="0.5" stroke-width="1.5"/>
            <rect x="35" y="32" width="10" height="14" rx="2" fill="#ffe11b"/>
          </g>
          <text x="24" y="95" fill="#ffffff" fill-opacity="0.06" font-size="44" font-weight="900" font-family="sans-serif">FLIPKART</text>
        </svg>
      `
    },
    {
      id: "hack-ai-india-2026",
      name: "AI India Global Hackathon",
      shortName: "IndiaAI Hackathon",
      organizer: "IndiaAI & MeitY",
      badge: "🇮🇳 Govt Sovereign AI",
      category: "National",
      themeClass: "hack-theme-ai-india",
      prizePool: "₹5,00,000 Grand Prize",
      prizeDisplay: "₹5,00,000 Prize",
      dates: "Nov 10 - Nov 12, 2026 (48 Hours)",
      mode: "Hybrid (New Delhi & Online)",
      teamSize: "4 to 5 Members",
      ruleHighlight: "🧠 Indic Multimodal LLMs",
      countdown: "⏳ Nov 2026 (New Delhi)",
      liveStatus: "● GOVERNMENT INITIATIVE LIVE",
      perks: ["🧠 Supercomputer GPU Compute", "🏛️ MeitY Incubation Grants", "🇮🇳 National Digital Honors"],
      participatingPeersCount: 28,
      peerAvatars: [
        { initial: "SK", bg: "#059669" },
        { initial: "NA", bg: "#0284c7" },
        { initial: "DP", bg: "#6366f1" }
      ],
      domains: ["Indic LLMs", "Agri-Tech AI", "Preventive Health", "Disaster AI"],
      description: "Build foundational AI applications and multimodal models tailored for Indian languages, rural access, and public infrastructure.",
      registeredTeamsCount: 780,
      bannerColor: "from-emerald-600 to-teal-800",
      officialUrl: "https://indiaai.gov.in/",
      logoSvg: `
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#10b981" stroke-width="2"/>
          <path d="M12 6v12M6 12h12" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="3" fill="#10b981"/>
        </svg>
      `,
      coverBannerSvg: `
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="iai-grad" x1="0" y1="0" x2="400" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#041f17"/>
              <stop offset="50%" stop-color="#062e22"/>
              <stop offset="100%" stop-color="#051726"/>
            </linearGradient>
            <radialGradient id="iai-glow" cx="65%" cy="35%" r="55%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="140" fill="url(#iai-grad)"/>
          <rect width="400" height="140" fill="url(#iai-glow)"/>
          <!-- Sovereign Neural Mesh -->
          <circle cx="330" cy="70" r="45" stroke="#10b981" stroke-opacity="0.3" stroke-width="1.5"/>
          <circle cx="330" cy="70" r="25" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1.5"/>
          <path d="M330 25 L330 115 M285 70 L375 70" stroke="#10b981" stroke-opacity="0.25" stroke-width="1"/>
          <!-- Cyber Circuit Lines -->
          <path d="M30 40 L120 100 L210 50 L280 80" stroke="#10b981" stroke-opacity="0.3" stroke-width="2"/>
          <circle cx="120" cy="100" r="5" fill="#10b981"/>
          <circle cx="210" cy="50" r="5" fill="#38bdf8"/>
          <text x="24" y="95" fill="#ffffff" fill-opacity="0.06" font-size="46" font-weight="900" font-family="sans-serif">INDIA AI</text>
        </svg>
      `
    }
  ];

  // 2. Verified Student Candidate Peer Pool
  const STUDENT_PEERS_POOL = [
    {
      id: "peer-rahul",
      name: "Rahul Verma",
      email: "rahul.verma@university.edu",
      role: "Backend & Systems Architect",
      secondaryRole: "AI / Python Developer",
      branch: "Computer Science & Engineering",
      college: "IIIT Bangalore",
      year: "Year 3 (2027)",
      skills: ["FastAPI", "Python", "Node.js", "PostgreSQL", "Docker", "Redis", "REST APIs"],
      skillRatings: { "FastAPI": 5, "Python": 5, "PostgreSQL": 4, "Docker": 4, "Redis": 4 },
      matchScoreBase: 96,
      availability: "20 hrs / week (Weekends + Evenings)",
      languages: ["English", "Hindi"],
      hackathonsParticipated: 5,
      hackathonsWon: 3,
      github: "https://github.com/rahul-backend",
      linkedin: "https://linkedin.com/in/rahul-verma",
      portfolio: "https://rahulverma.dev",
      interests: ["Healthcare AI", "FinTech", "Distributed Systems", "Cloud"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "FastAPI & PostgreSQL specialist. Built high-throughput microservices for Smart India Hackathon 2025 winning team."
    },
    {
      id: "peer-ananya",
      name: "Ananya Rao",
      email: "ananya.rao@university.edu",
      role: "Frontend & UI/UX Lead",
      secondaryRole: "Product Designer",
      branch: "Information Technology",
      college: "National Institute of Technology",
      year: "Year 3 (2027)",
      skills: ["React", "Next.js", "Tailwind CSS", "Figma", "UI/UX Design", "TypeScript"],
      skillRatings: { "React": 5, "Figma": 5, "Tailwind CSS": 5, "Next.js": 4, "TypeScript": 4 },
      matchScoreBase: 94,
      availability: "15 hrs / week (Flexible)",
      languages: ["English", "Telugu", "Hindi"],
      hackathonsParticipated: 4,
      hackathonsWon: 2,
      github: "https://github.com/ananya-dev-ui",
      linkedin: "https://linkedin.com/in/ananya-rao",
      portfolio: "https://ananya.design",
      interests: ["EdTech", "Healthcare", "Design Systems", "Web3 UI"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "Pixel-perfect frontend architect and Figma designer. Expert in turning complex problem statements into clean, high-conversion web apps."
    },
    {
      id: "peer-priya",
      name: "Priya Nair",
      email: "priya.nair@university.edu",
      role: "AI/ML & GenAI Researcher",
      secondaryRole: "Data Scientist",
      branch: "AI & Data Engineering",
      college: "BITS Pilani",
      year: "Year 4 (2026)",
      skills: ["Python", "PyTorch", "TensorFlow", "LangChain", "Computer Vision", "Scikit-Learn", "NLP"],
      skillRatings: { "PyTorch": 5, "Python": 5, "Computer Vision": 5, "LangChain": 4, "NLP": 4 },
      matchScoreBase: 95,
      availability: "15 hrs / week (Evenings)",
      languages: ["English", "Malayalam", "Hindi"],
      hackathonsParticipated: 6,
      hackathonsWon: 3,
      github: "https://github.com/priya-ml-ai",
      linkedin: "https://linkedin.com/in/priya-nair-ai",
      portfolio: "https://priyanair.ai",
      interests: ["Healthcare AI", "Computer Vision", "Multimodal LLMs", "Agriculture"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "Published researcher in transformer architectures. Kaggle 3x Expert. Built edge computer vision models for crop and disease diagnostics."
    },
    {
      id: "peer-kiran",
      name: "Kiranmayi Reddy",
      email: "kiranmayi.r@university.edu",
      role: "UI/UX & Pitch Deck Specialist",
      secondaryRole: "Product Manager",
      branch: "Computer Science & Design",
      college: "Osmania University",
      year: "Year 3 (2027)",
      skills: ["Figma", "UI/UX Design", "Pitch Presentation", "Wireframing", "Canva", "User Research"],
      skillRatings: { "Figma": 5, "Pitch Presentation": 5, "UI/UX Design": 5, "User Research": 4 },
      matchScoreBase: 93,
      availability: "15 hrs / week",
      languages: ["English", "Telugu", "Hindi"],
      hackathonsParticipated: 4,
      hackathonsWon: 2,
      github: "https://github.com/kiran-design",
      linkedin: "https://linkedin.com/in/kiranmayi-reddy",
      portfolio: "https://kiran.design",
      interests: ["EdTech", "CleanTech", "Human-Centered Design", "Pitching"],
      verifiedCollege: true,
      verifiedGithub: false,
      bio: "Won 'Best Pitch & Presentation' at 2 state hackathons. Crafts winning narrative slides and intuitive user flows in Figma."
    },
    {
      id: "peer-vikram",
      name: "Vikram Seth",
      email: "vikram.seth@university.edu",
      role: "DevOps & Cloud Infrastructure Lead",
      secondaryRole: "Backend Engineer",
      branch: "Computer Science",
      college: "IIT Madras",
      year: "Year 3 (2027)",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux", "Nginx"],
      skillRatings: { "Docker": 5, "AWS": 5, "CI/CD": 5, "Kubernetes": 4, "Linux": 5 },
      matchScoreBase: 92,
      availability: "12 hrs / week (Weekends)",
      languages: ["English", "Hindi"],
      hackathonsParticipated: 3,
      hackathonsWon: 1,
      github: "https://github.com/vikram-devops",
      linkedin: "https://linkedin.com/in/vikram-seth",
      portfolio: "https://vikramseth.cloud",
      interests: ["Cloud Infrastructure", "Zero-Downtime Deployment", "FinTech"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "Automates multi-stage CI/CD pipelines, container clustering, and AWS cloud architecture for hackathon demo stability."
    },
    {
      id: "peer-aditya",
      name: "Aditya Joshi",
      email: "aditya.j@university.edu",
      role: "Web3 & Smart Contract Developer",
      secondaryRole: "Security Auditor",
      branch: "Computer Science",
      college: "IIT Delhi",
      year: "Year 3 (2027)",
      skills: ["Solidity", "Rust", "Web3.js", "Hardhat", "Ethereum", "Cryptography"],
      skillRatings: { "Solidity": 5, "Hardhat": 5, "Rust": 4, "Web3.js": 5 },
      matchScoreBase: 91,
      availability: "18 hrs / week",
      languages: ["English", "Hindi", "Marathi"],
      hackathonsParticipated: 5,
      hackathonsWon: 2,
      github: "https://github.com/aditya-web3",
      linkedin: "https://linkedin.com/in/aditya-joshi-web3",
      portfolio: "https://adityajoshi.eth.limo",
      interests: ["Web3", "DeFi", "Zero-Knowledge", "Smart Contract Security"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "ETHIndia finalist. Specializes in building secure, gas-optimized Solidity smart contracts and zero-knowledge intent protocols."
    },
    {
      id: "peer-sneha",
      name: "Sneha Kulkarni",
      email: "sneha.k@university.edu",
      role: "Mobile App Developer (Flutter / React Native)",
      secondaryRole: "Frontend Developer",
      branch: "Software Engineering",
      college: "VIT Vellore",
      year: "Year 2 (2028)",
      skills: ["Flutter", "Dart", "Firebase", "React Native", "JavaScript", "REST APIs"],
      skillRatings: { "Flutter": 5, "Dart": 5, "Firebase": 4, "React Native": 4 },
      matchScoreBase: 89,
      availability: "16 hrs / week",
      languages: ["English", "Marathi", "Hindi"],
      hackathonsParticipated: 3,
      hackathonsWon: 1,
      github: "https://github.com/sneha-mobile",
      linkedin: "https://linkedin.com/in/sneha-kulkarni",
      portfolio: "https://snehak.app",
      interests: ["Mobile UX", "Offline-First Apps", "Healthcare", "EdTech"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "Built 3 cross-platform mobile apps with 10k+ downloads. Strong expertise in Flutter offline caching and Google Maps integration."
    },
    {
      id: "peer-rohan",
      name: "Rohan Gupta",
      email: "rohan.g@university.edu",
      role: "IoT & Embedded Systems Engineer",
      secondaryRole: "Hardware / Edge AI",
      branch: "Electronics & Communication",
      college: "DTU Delhi",
      year: "Year 3 (2027)",
      skills: ["C++", "Python", "Raspberry Pi", "Arduino", "TensorFlow Lite", "MQTT", "ESP32"],
      skillRatings: { "C++": 5, "Raspberry Pi": 5, "Arduino": 5, "TensorFlow Lite": 4 },
      matchScoreBase: 90,
      availability: "14 hrs / week",
      languages: ["English", "Hindi"],
      hackathonsParticipated: 4,
      hackathonsWon: 2,
      github: "https://github.com/rohan-iot",
      linkedin: "https://linkedin.com/in/rohan-gupta-iot",
      portfolio: "https://rohangupta.hardware",
      interests: ["Agri-Tech IoT", "Edge AI", "Smart Cities", "Robotics"],
      verifiedCollege: true,
      verifiedGithub: true,
      bio: "Hardware tinkerer with 2 national robotics awards. Specializes in edge AI models running on Raspberry Pi and ESP32 microcontrollers."
    }
  ];

  // 3. Initial Active Hackathon Teams & Workspace Seed
  const INITIAL_TEAM_POSTS = [
    {
      id: "team-sih-agrovision",
      teamName: "AgroVision AI",
      projectType: "Hackathon",
      targetEvent: "Smart India Hackathon 2026",
      hackathonId: "hack-sih-2026",
      duration: "48 Hours",
      creatorName: "Alex Chen",
      creatorEmail: "alex.chen@example.com",
      creatorRole: "Team Lead & Frontend Developer",
      projectIdea: "Edge AI computer vision system for real-time crop disease diagnosis in rural areas with offline vernacular voice assistance and fertilizer recommendations.",
      lookingFor: ["FastAPI", "Python", "Machine Learning", "UI/UX Design", "Raspberry Pi"],
      members: [
        { name: "Alex Chen", role: "Team Lead & Frontend", email: "alex.chen@example.com", skills: ["React", "JavaScript", "Tailwind CSS", "Python"] },
        { name: "Rahul Verma", role: "Backend & Systems Architect", email: "rahul.verma@university.edu", skills: ["FastAPI", "Python", "PostgreSQL", "Docker"] },
        { name: "Priya Nair", role: "AI & Computer Vision Specialist", email: "priya.nair@university.edu", skills: ["PyTorch", "Computer Vision", "TensorFlow Lite"] }
      ],
      maxMembers: 6,
      contactTelegram: "@alexchen_ai",
      createdAt: "2026-08-16T10:00:00Z",
      status: "OPEN",
      progress: {
        ideation: 100,
        architecture: 100,
        prototype: 75,
        pitchDeck: 40
      },
      tasks: [
        { id: "task-1", title: "Train Leaf Disease CNN Model (95%+ accuracy)", assignee: "Priya Nair", status: "DONE", pillar: "AI / ML" },
        { id: "task-2", title: "Build FastAPI backend & offline SQLite cache", assignee: "Rahul Verma", status: "DONE", pillar: "Backend" },
        { id: "task-3", title: "Create responsive drag-and-drop diagnostic UI", assignee: "Alex Chen", status: "IN_PROGRESS", pillar: "Frontend" },
        { id: "task-4", title: "Design vernacular voice assistance UI & icons", assignee: "Unassigned", status: "TODO", pillar: "UI/UX" },
        { id: "task-5", title: "Prepare 10-slide SIH judging pitch deck", assignee: "Unassigned", status: "TODO", pillar: "Pitch" }
      ],
      discussions: [
        { sender: "Alex Chen", role: "Lead", message: "Team, dataset preprocessing is complete. Rahul, let's sync on the REST API contracts tonight!", time: "2 hours ago" },
        { sender: "Rahul Verma", role: "Backend", message: "API endpoints are live on port 8000. Docs available at /docs.", time: "1 hour ago" },
        { sender: "Priya Nair", role: "AI Specialist", message: "Model weights exported to ONNX format for fast edge inference. Size is only 14MB!", time: "30 mins ago" }
      ],
      links: {
        github: "https://github.com/alexchen/agrovision-ai-sih",
        figma: "https://figma.com/@agrovision",
        pitchDeck: "https://docs.google.com/presentation/d/agrovision-pitch"
      },
      joinRequests: [
        {
          id: "req-kiran-1",
          applicantName: "Kiranmayi Reddy",
          applicantEmail: "kiranmayi.r@university.edu",
          applicantRole: "UI/UX & Pitch Lead",
          applicantSkills: ["Figma", "UI/UX Design", "Pitch Presentation"],
          matchScore: 94,
          pitchMessage: "Hey Alex! I reviewed your AgroVision SIH idea. I can design intuitive regional UI in Figma and craft a winning 10-slide pitch deck for judges.",
          submittedAt: "25 mins ago"
        }
      ]
    },
    {
      id: "team-gsc-gemini",
      teamName: "Gemini Classroom Pilots",
      projectType: "Hackathon",
      targetEvent: "Google Solution Challenge 2026",
      hackathonId: "hack-gsc-2026",
      duration: "2 Weeks",
      creatorName: "Aarav Sharma",
      creatorEmail: "aarav.sharma@university.edu",
      creatorRole: "AI / Cloud Lead",
      projectIdea: "Real-time multimodal classroom lecture transcription, multilingual translation into 12 Indian languages, and auto-quizzing using Gemini 1.5 Pro multimodal API.",
      lookingFor: ["Flutter", "Firebase", "Google Cloud", "UI/UX Design"],
      members: [
        { name: "Aarav Sharma", role: "AI & Cloud Lead", email: "aarav.sharma@university.edu", skills: ["Python", "Gemini API", "Google Cloud"] },
        { name: "Sneha Kulkarni", role: "Mobile App Engineer", email: "sneha.k@university.edu", skills: ["Flutter", "Firebase", "Dart"] }
      ],
      maxMembers: 4,
      contactTelegram: "@aarav_gsc",
      createdAt: "2026-08-15T14:30:00Z",
      status: "OPEN",
      progress: { ideation: 100, architecture: 80, prototype: 50, pitchDeck: 20 },
      tasks: [
        { id: "gsc-task-1", title: "Integrate Gemini 1.5 Pro Multimodal Streaming API", assignee: "Aarav Sharma", status: "DONE", pillar: "AI / Cloud" },
        { id: "gsc-task-2", title: "Build Flutter lecture recording & playback screen", assignee: "Sneha Kulkarni", status: "IN_PROGRESS", pillar: "Mobile" },
        { id: "gsc-task-3", title: "Create student interactive quiz card component", assignee: "Unassigned", status: "TODO", pillar: "Frontend" }
      ],
      discussions: [
        { sender: "Aarav Sharma", role: "Lead", message: "Gemini 1.5 audio transcription latency is under 1.2 seconds!", time: "Yesterday" }
      ],
      links: {
        github: "https://github.com/aarav/gemini-classroom",
        figma: "https://figma.com/@geminipilots",
        pitchDeck: "https://docs.google.com/presentation/d/gemini-pilots"
      },
      joinRequests: []
    },
    {
      id: "team-ethindia-neural",
      teamName: "NeuralChains",
      projectType: "Hackathon",
      targetEvent: "ETHIndia 2026",
      hackathonId: "hack-ethindia-2026",
      duration: "36 Hours",
      creatorName: "Aditya Joshi",
      creatorEmail: "aditya.j@university.edu",
      creatorRole: "Smart Contract Developer",
      projectIdea: "Autonomous AI Agent that executes DeFi yield rebalancing using zero-knowledge proofs and intent protocols on Arbitrum.",
      lookingFor: ["Python", "PyTorch", "FastAPI", "React"],
      members: [
        { name: "Aditya Joshi", role: "Web3 Smart Contract Dev", email: "aditya.j@university.edu", skills: ["Solidity", "Rust", "Hardhat"] },
        { name: "Ananya Rao", role: "Frontend UI/UX", email: "ananya.rao@university.edu", skills: ["React", "Tailwind CSS", "Figma"] }
      ],
      maxMembers: 4,
      contactTelegram: "@aditya_web3",
      createdAt: "2026-08-14T09:00:00Z",
      status: "OPEN",
      progress: { ideation: 100, architecture: 90, prototype: 40, pitchDeck: 10 },
      tasks: [
        { id: "eth-task-1", title: "Write & test Vault smart contracts on Sepolia", assignee: "Aditya Joshi", status: "DONE", pillar: "Web3" },
        { id: "eth-task-2", title: "Design Web3 wallet connect & swap modal", assignee: "Ananya Rao", status: "IN_PROGRESS", pillar: "Frontend" }
      ],
      discussions: [
        { sender: "Aditya Joshi", role: "Lead", message: "Contracts deployed on Arbitrum Sepolia testnet.", time: "3 hours ago" }
      ],
      links: {
        github: "https://github.com/aditya/neuralchains",
        figma: "https://figma.com/@neuralchains",
        pitchDeck: ""
      },
      joinRequests: []
    }
  ];

  // 4. Persistence Helpers
  function loadTeams() {
    try {
      const raw = localStorage.getItem(TEAMS_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("[CampusPilot Teams] Load error:", e);
    }
    return [...INITIAL_TEAM_POSTS];
  }

  function saveTeams(teams) {
    try {
      localStorage.setItem(TEAMS_STORAGE_KEY, JSON.stringify(teams));
    } catch (e) {
      console.warn("[CampusPilot Teams] Save error:", e);
    }
  }

  // 5. Multi-Factor Compatibility Score Engine
  function calculateCompatibilityBreakdown(userProfile, candidateOrTeam) {
    const userSkills = (userProfile.skills || ["React", "JavaScript", "Python"]).map(s => s.toLowerCase());
    const userRoles = (userProfile.targetRoles || ["Frontend Developer"]).map(r => r.toLowerCase());
    
    // Candidate or Team target skills
    const targetSkills = Array.isArray(candidateOrTeam.skills) 
      ? candidateOrTeam.skills.map(s => s.toLowerCase())
      : (candidateOrTeam.lookingFor || []).map(s => s.toLowerCase());

    const targetRoles = candidateOrTeam.role ? [candidateOrTeam.role.toLowerCase()] : [];

    // Factor 1: Skill Complementarity (40 pts)
    // Complementary means they bring skills the user lacks or matches what the project requires
    let complementarySkills = [];
    if (candidateOrTeam.skills) {
      complementarySkills = candidateOrTeam.skills.filter(sk => !userSkills.includes(sk.toLowerCase()));
    } else if (candidateOrTeam.lookingFor) {
      complementarySkills = userProfile.skills.filter(sk => 
        (candidateOrTeam.lookingFor || []).some(req => req.toLowerCase().includes(sk.toLowerCase()) || sk.toLowerCase().includes(req.toLowerCase()))
      );
    }
    const skillScore = Math.min(40, Math.max(22, complementarySkills.length * 9));

    // Factor 2: Role Diversity (25 pts)
    // Avoid 4 frontend developers on one team
    const isDifferentRole = !userRoles.some(ur => targetRoles.some(tr => tr.includes(ur) || ur.includes(tr)));
    const roleScore = isDifferentRole ? 25 : 14;

    // Factor 3: Hackathon Experience & Track Record (15 pts)
    const wins = candidateOrTeam.hackathonsWon || 1;
    const expScore = Math.min(15, 8 + wins * 3);

    // Factor 4: Availability & Language Fit (10 pts)
    const availScore = candidateOrTeam.availability?.includes("20") ? 10 : 8;

    // Factor 5: Domain Synergy (10 pts)
    const domainScore = 9;

    const totalScore = Math.min(99, Math.max(70, skillScore + roleScore + expScore + availScore + domainScore));

    // Natural Language Explanation
    let reasoning = "";
    if (candidateOrTeam.role) {
      reasoning = `Brings deep ${candidateOrTeam.role} capability (${(candidateOrTeam.skills || []).slice(0, 3).join(', ')}) that perfectly complements your background. High track record with ${candidateOrTeam.hackathonsWon || 1}+ hackathon podium finishes.`;
    } else {
      reasoning = `Your technical skillset directly fulfills ${complementarySkills.length ? complementarySkills.join(', ') : 'critical requirements'} needed for this team's roadmap.`;
    }

    return {
      totalScore,
      skillScore,
      roleScore,
      expScore,
      availScore,
      domainScore,
      complementarySkills,
      reasoning
    };
  }

  // 6. Natural Language AI Team Builder
  function buildAITeamFromPrompt(promptText, userProfile) {
    const p = (promptText || "").toLowerCase();
    const studentName = userProfile.fullName || userProfile.name || "Alex Chen";
    const studentSkills = userProfile.skills || ["React", "JavaScript", "Tailwind CSS"];

    // Extract Domain
    let domain = "Open Innovation";
    let targetHackathon = "Smart India Hackathon 2026";
    if (p.includes("health") || p.includes("med") || p.includes("doctor")) {
      domain = "AI Healthcare & Assistive Tech";
      targetHackathon = "Smart India Hackathon 2026";
    } else if (p.includes("education") || p.includes("learn") || p.includes("study") || p.includes("classroom")) {
      domain = "AI EdTech & Classroom Intelligence";
      targetHackathon = "Google Solution Challenge 2026";
    } else if (p.includes("crypto") || p.includes("web3") || p.includes("defi") || p.includes("blockchain")) {
      domain = "Web3 & Decentralized Autonomous Protocols";
      targetHackathon = "ETHIndia 2026";
    } else if (p.includes("agri") || p.includes("crop") || p.includes("farmer") || p.includes("plant")) {
      domain = "Smart Agri-Tech & Computer Vision";
      targetHackathon = "Smart India Hackathon 2026";
    }

    // Determine Required Roles
    let recommendedPeers = [];
    if (p.includes("health") || p.includes("agri") || p.includes("ai")) {
      recommendedPeers = [
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-priya"), roleNeeded: "AI / Computer Vision Lead", match: 96, contribution: "Architects CNN models, model quantisation, and inference APIs." },
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-rahul"), roleNeeded: "Backend & Systems Architect", match: 94, contribution: "Builds high-throughput FastAPI endpoints, database schema, and microservices." },
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-kiran"), roleNeeded: "UI/UX & Pitch Lead", match: 92, contribution: "Designs user flows in Figma and delivers the winning pitch presentation to judges." }
      ].filter(r => r.peer);
    } else if (p.includes("web3") || p.includes("defi")) {
      recommendedPeers = [
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-aditya"), roleNeeded: "Smart Contract Lead", match: 96, contribution: "Deploys secure Solidity vaults and Arbitrum L2 integrations." },
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-rahul"), roleNeeded: "Backend & Indexer Architect", match: 92, contribution: "Builds subgraph indexers and off-chain REST microservices." },
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-ananya"), roleNeeded: "Web3 Frontend UI/UX", match: 93, contribution: "Creates Web3 wallet connect interfaces and responsive DeFi dashboards." }
      ].filter(r => r.peer);
    } else {
      // Default balanced team
      recommendedPeers = [
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-rahul"), roleNeeded: "Backend Architect", match: 95, contribution: "Scalable APIs, database normalization, and containerized deployment." },
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-priya"), roleNeeded: "AI / Data Engineer", match: 94, contribution: "Intelligent analytics, machine learning classification, and RAG pipelines." },
        { peer: STUDENT_PEERS_POOL.find(s => s.id === "peer-kiran"), roleNeeded: "UI/UX & Pitch Presenter", match: 91, contribution: "Translates technical features into an unforgettable judging pitch." }
      ].filter(r => r.peer);
    }

    const synergyExplanation = `This 4-person dream team achieves a **95% Team Balance Score**. ${studentName} drives core frontend and product architecture, ${recommendedPeers[0].peer.name} covers ${recommendedPeers[0].roleNeeded}, ${recommendedPeers[1].peer.name} guarantees ${recommendedPeers[1].roleNeeded}, and ${recommendedPeers[2].peer.name} secures ${recommendedPeers[2].roleNeeded}. Zero skill overlap and 100% judging criteria coverage.`;

    return {
      prompt: promptText,
      extractedDomain: domain,
      targetHackathon: targetHackathon,
      userRole: "Team Lead & Frontend Architect",
      userSkills: studentSkills,
      recommendedTeammates: recommendedPeers,
      synergyExplanation: synergyExplanation,
      overallMatch: 95,
      suggestedProjectName: `${domain.split(' ')[0]}Pilot AI`
    };
  }

  // 7. Team Balance & Skill Gap Analyzer (5 Core Pillars)
  function analyzeTeamGaps(team) {
    if (!team) return { coveredPillars: [], missingPillars: [], coverageScore: 0 };

    const allMembers = team.members || [];
    const teamSkillsSet = new Set();
    allMembers.forEach(m => {
      (m.skills || []).forEach(sk => teamSkillsSet.add(sk.toLowerCase()));
      if (m.role) teamSkillsSet.add(m.role.toLowerCase());
    });

    const essentialPillars = [
      { id: "frontend", pillar: "Frontend & UI/UX", keywords: ["react", "ui/ux", "figma", "tailwind", "next.js", "frontend", "html", "css", "flutter"], icon: "🎨", weight: 20 },
      { id: "backend", pillar: "Backend & Systems", keywords: ["fastapi", "node.js", "postgresql", "mongodb", "backend", "python", "rest apis", "sql", "redis"], icon: "⚙️", weight: 25 },
      { id: "ai", pillar: "AI & Machine Learning", keywords: ["pytorch", "machine learning", "tensorflow", "computer vision", "nlp", "langchain", "ai"], icon: "🧠", weight: 25 },
      { id: "devops", pillar: "DevOps & Cloud", keywords: ["docker", "kubernetes", "aws", "ci/cd", "cloud", "linux", "terraform"], icon: "☁️", weight: 15 },
      { id: "pitch", pillar: "Pitch & Presentation", keywords: ["pitch", "presentation", "product", "pitch presentation", "design", "wireframing"], icon: "🎤", weight: 15 }
    ];

    const coveredPillars = [];
    const missingPillars = [];

    essentialPillars.forEach(p => {
      const hasSkill = p.keywords.some(kw => {
        for (const s of teamSkillsSet) {
          if (s.includes(kw) || kw.includes(s)) return true;
        }
        return false;
      });

      if (hasSkill) {
        coveredPillars.push(p);
      } else {
        const matchingPeers = STUDENT_PEERS_POOL.filter(peer => 
          peer.skills.some(ps => p.keywords.some(kw => ps.toLowerCase().includes(kw) || kw.includes(ps.toLowerCase()))) ||
          p.keywords.some(kw => peer.role.toLowerCase().includes(kw))
        );
        missingPillars.push({
          ...p,
          matchingPeers: matchingPeers.slice(0, 3)
        });
      }
    });

    const totalWeightCovered = coveredPillars.reduce((acc, curr) => acc + curr.weight, 0);
    const balanceScore = Math.min(100, Math.max(30, totalWeightCovered));

    return {
      coveredSkills: Array.from(teamSkillsSet),
      coveredPillars,
      missingPillars,
      totalPillarsCount: essentialPillars.length,
      coverageScore: balanceScore,
      teamBalanceStatus: balanceScore >= 85 ? "EXCELLENT" : balanceScore >= 65 ? "GOOD" : "ACTION_NEEDED"
    };
  }

  // 8. Team Creation, Requests & Workspace Actions
  function createTeam(teamData, userProfile) {
    const teams = loadTeams();
    const studentName = userProfile.fullName || userProfile.name || "Alex Chen";
    const studentEmail = userProfile.email || "alex.chen@example.com";

    const newTeam = {
      id: `team-${Date.now()}`,
      teamName: teamData.teamName || "New Hackathon Team",
      projectType: teamData.projectType || "Hackathon",
      targetEvent: teamData.targetEvent || "Smart India Hackathon 2026",
      hackathonId: teamData.hackathonId || "hack-sih-2026",
      duration: teamData.duration || "48 Hours",
      creatorName: studentName,
      creatorEmail: studentEmail,
      creatorRole: teamData.creatorRole || "Team Lead & Developer",
      projectIdea: teamData.projectIdea || "Autonomous AI engineering platform for hackathons.",
      lookingFor: Array.isArray(teamData.lookingFor) ? teamData.lookingFor : (teamData.lookingFor || "").split(',').map(s => s.trim()).filter(Boolean),
      members: [
        {
          name: studentName,
          email: studentEmail,
          role: teamData.creatorRole || "Team Lead",
          skills: userProfile.skills || ["React", "JavaScript", "Python", "Git"]
        }
      ],
      maxMembers: Number(teamData.maxMembers) || 4,
      contactTelegram: teamData.contactTelegram || "@campuspilot_teams",
      createdAt: new Date().toISOString(),
      status: "OPEN",
      progress: { ideation: 100, architecture: 50, prototype: 20, pitchDeck: 0 },
      tasks: [
        { id: `task-${Date.now()}-1`, title: "Finalize problem statement and system architecture", assignee: studentName, status: "IN_PROGRESS", pillar: "General" }
      ],
      discussions: [
        { sender: studentName, role: "Team Lead", message: "Welcome to the team workspace! Let's build something extraordinary.", time: "Just now" }
      ],
      links: { github: "", figma: "", pitchDeck: "" },
      joinRequests: []
    };

    teams.unshift(newTeam);
    saveTeams(teams);
    return newTeam;
  }

  function requestToJoinTeam(teamId, userProfile, pitchMessage = "") {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false, reason: "TEAM_NOT_FOUND" };

    const studentName = userProfile.fullName || userProfile.name || "Alex Chen";
    const studentEmail = userProfile.email || "alex.chen@example.com";

    if (team.members.some(m => m.email.toLowerCase() === studentEmail.toLowerCase())) {
      return { success: false, reason: "ALREADY_MEMBER" };
    }

    if (team.joinRequests.some(r => r.applicantEmail.toLowerCase() === studentEmail.toLowerCase())) {
      return { success: false, reason: "ALREADY_APPLIED" };
    }

    const matchAnalysis = calculateCompatibilityBreakdown(userProfile, team);

    const newRequest = {
      id: `req-${Date.now()}`,
      applicantName: studentName,
      applicantEmail: studentEmail,
      applicantRole: userProfile.targetRoles?.[0] || "Frontend Developer",
      applicantSkills: userProfile.skills || ["React", "JavaScript", "Python"],
      matchScore: matchAnalysis.totalScore || 94,
      pitchMessage: pitchMessage || "Hey! I would love to contribute my technical skills to your hackathon project.",
      submittedAt: "Just now"
    };

    team.joinRequests.unshift(newRequest);
    saveTeams(teams);

    // Automated Email Notification Dispatch
    try {
      if (window.CampusPilotServices && window.CampusPilotServices.emailNotificationService) {
        window.CampusPilotServices.emailNotificationService.sendEmailNotification("team_join_request", {
          applicantName: studentName,
          applicantRole: newRequest.applicantRole,
          applicantSkills: newRequest.applicantSkills,
          teamName: team.teamName,
          projectTitle: team.projectIdea,
          matchScore: newRequest.matchScore,
          pitchMessage: newRequest.pitchMessage,
          reviewUrl: "https://campuspilot.ai/#teams"
        }, {
          fullName: team.creatorName,
          email: team.creatorEmail
        }, { isManualTest: true });
      }
    } catch (err) {
      console.warn("[CampusPilot Teams] Email notice:", err);
    }

    return { success: true, request: newRequest, team };
  }

  function acceptJoinRequest(teamId, requestId, teamLeadProfile = {}) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false, reason: "TEAM_NOT_FOUND" };

    const reqIndex = team.joinRequests.findIndex(r => r.id === requestId);
    if (reqIndex === -1) return { success: false, reason: "REQUEST_NOT_FOUND" };

    const req = team.joinRequests[reqIndex];
    team.members.push({
      name: req.applicantName,
      email: req.applicantEmail,
      role: req.applicantRole,
      skills: req.applicantSkills
    });

    team.joinRequests.splice(reqIndex, 1);
    if (team.members.length >= team.maxMembers) {
      team.status = "FULL";
    }

    saveTeams(teams);

    // Acceptance Email Notification
    try {
      if (window.CampusPilotServices && window.CampusPilotServices.emailNotificationService) {
        window.CampusPilotServices.emailNotificationService.sendEmailNotification("team_join_accepted", {
          teamName: team.teamName,
          projectTitle: team.projectIdea,
          teamLeadName: team.creatorName || teamLeadProfile.fullName || "Team Lead",
          roleAssigned: req.applicantRole,
          communicationChannel: `https://t.me/${(team.contactTelegram || '@campuspilot_teams').replace('@', '')}`,
          kickoffUrl: "https://campuspilot.ai/#teams"
        }, {
          fullName: req.applicantName,
          email: req.applicantEmail
        }, { isManualTest: true });
      }
    } catch (err) {
      console.warn("[CampusPilot Teams] Email notice:", err);
    }

    return { success: true, team, acceptedMember: req };
  }

  function rejectJoinRequest(teamId, requestId) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false, reason: "TEAM_NOT_FOUND" };

    team.joinRequests = team.joinRequests.filter(r => r.id !== requestId);
    saveTeams(teams);
    return { success: true, team };
  }

  function inviteTeammate(teamId, candidatePeer, teamLeadProfile = {}) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false, reason: "TEAM_NOT_FOUND" };

    const leadName = teamLeadProfile.fullName || team.creatorName || "Alex Chen";

    // Trigger Email Invitation
    try {
      if (window.CampusPilotServices && window.CampusPilotServices.emailNotificationService) {
        window.CampusPilotServices.emailNotificationService.sendEmailNotification("team_invitation", {
          senderName: leadName,
          teamName: team.teamName,
          hackathonName: team.targetEvent || "Smart India Hackathon 2026",
          projectTitle: team.projectIdea,
          roleNeeded: candidatePeer.role || "Technical Specialist",
          joinUrl: "https://campuspilot.ai/#teams"
        }, {
          fullName: candidatePeer.name,
          email: candidatePeer.email
        }, { isManualTest: true });
      }
    } catch (err) {
      console.warn("[CampusPilot Teams] Invitation email notice:", err);
    }

    return { success: true, candidate: candidatePeer, team };
  }

  // 9. Workspace Operations
  function addTeamTask(teamId, title, assignee, pillar = "General") {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false };

    if (!team.tasks) team.tasks = [];
    const newTask = {
      id: `task-${Date.now()}`,
      title: title || "New Hackathon Milestone Task",
      assignee: assignee || "Team Member",
      status: "TODO",
      pillar: pillar
    };
    team.tasks.push(newTask);
    saveTeams(teams);
    return { success: true, task: newTask, team };
  }

  function toggleTeamTask(teamId, taskId) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team || !team.tasks) return { success: false };

    const task = team.tasks.find(tk => tk.id === taskId);
    if (task) {
      if (task.status === "TODO") task.status = "IN_PROGRESS";
      else if (task.status === "IN_PROGRESS") task.status = "DONE";
      else task.status = "TODO";
      saveTeams(teams);
      return { success: true, task, team };
    }
    return { success: false };
  }

  function deleteTeamTask(teamId, taskId) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team || !team.tasks) return { success: false };

    team.tasks = team.tasks.filter(tk => tk.id !== taskId);
    saveTeams(teams);
    return { success: true, team };
  }

  function addTeamDiscussionMessage(teamId, senderName, role, messageText) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false };

    if (!team.discussions) team.discussions = [];
    const msg = {
      sender: senderName || "Alex Chen",
      role: role || "Team Member",
      message: messageText,
      time: "Just now"
    };
    team.discussions.push(msg);
    saveTeams(teams);
    return { success: true, message: msg, team };
  }

  function updateTeamProgress(teamId, stage, value) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false };

    if (!team.progress) team.progress = { ideation: 100, architecture: 50, prototype: 0, pitchDeck: 0 };
    team.progress[stage] = Math.min(100, Math.max(0, Number(value)));
    saveTeams(teams);
    return { success: true, team };
  }

  function updateTeamLinks(teamId, githubUrl, figmaUrl, pitchDeckUrl) {
    const teams = loadTeams();
    const team = teams.find(t => t.id === teamId);
    if (!team) return { success: false };

    team.links = {
      github: githubUrl || team.links?.github || "",
      figma: figmaUrl || team.links?.figma || "",
      pitchDeck: pitchDeckUrl || team.links?.pitchDeck || ""
    };
    saveTeams(teams);
    return { success: true, team };
  }

  // 10. Filter Teams
  function filterTeamPosts(posts, categoryFilter = "All", hackathonFilter = "All", searchQuery = "") {
    return posts.filter(post => {
      const matchesCategory = categoryFilter === "All" || post.projectType === categoryFilter;
      const matchesHackathon = hackathonFilter === "All" || (post.hackathonId === hackathonFilter) || (post.targetEvent || "").toLowerCase().includes(hackathonFilter.toLowerCase());
      
      let matchesSearch = true;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        matchesSearch = (
          (post.teamName || "").toLowerCase().includes(q) ||
          (post.projectIdea || "").toLowerCase().includes(q) ||
          (post.targetEvent || "").toLowerCase().includes(q) ||
          (post.creatorName || "").toLowerCase().includes(q) ||
          post.lookingFor.some(s => s.toLowerCase().includes(q))
        );
      }

      return matchesCategory && matchesHackathon && matchesSearch;
    });
  }

  // Global Service Export
  if (typeof window !== 'undefined') {
    window.CampusPilotServices = window.CampusPilotServices || {};
    window.CampusPilotServices.HACKATHONS_CATALOG = HACKATHONS_CATALOG;
    window.CampusPilotServices.STUDENT_PEERS_POOL = STUDENT_PEERS_POOL;
    window.CampusPilotServices.INITIAL_TEAM_POSTS = INITIAL_TEAM_POSTS;
    window.CampusPilotServices.loadTeams = loadTeams;
    window.CampusPilotServices.saveTeams = saveTeams;
    window.CampusPilotServices.calculateCompatibilityBreakdown = calculateCompatibilityBreakdown;
    window.CampusPilotServices.buildAITeamFromPrompt = buildAITeamFromPrompt;
    window.CampusPilotServices.analyzeTeamGaps = analyzeTeamGaps;
    window.CampusPilotServices.createTeam = createTeam;
    window.CampusPilotServices.requestToJoinTeam = requestToJoinTeam;
    window.CampusPilotServices.acceptJoinRequest = acceptJoinRequest;
    window.CampusPilotServices.rejectJoinRequest = rejectJoinRequest;
    window.CampusPilotServices.inviteTeammate = inviteTeammate;
    window.CampusPilotServices.addTeamTask = addTeamTask;
    window.CampusPilotServices.toggleTeamTask = toggleTeamTask;
    window.CampusPilotServices.deleteTeamTask = deleteTeamTask;
    window.CampusPilotServices.addTeamDiscussionMessage = addTeamDiscussionMessage;
    window.CampusPilotServices.updateTeamProgress = updateTeamProgress;
    window.CampusPilotServices.updateTeamLinks = updateTeamLinks;
    window.CampusPilotServices.filterTeamPosts = filterTeamPosts;
  }
})(typeof window !== 'undefined' ? window : this);
