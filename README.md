# 🤖 CampusPilot AI — Intelligent Student Opportunity & AI-Assisted Auto-Apply Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-indigo.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web_Application-blue.svg)](#-tech-stack--implementation-reality)
[![Stack](https://img.shields.io/badge/Tech_Stack-Vanilla_JS_(ES6+)_%7C_Tailwind_CSS_%7C_Python-06b6d4.svg)](#-tech-stack--implementation-reality)
[![Design](https://img.shields.io/badge/UI/UX-3D_Glassmorphism_Dark_Mode-6366f1.svg)](#-design-system)
[![3D Spatial UI](https://img.shields.io/badge/3D_Engine-Perspective_Depth_%7C_Tactile_Tilt-8b5cf6.svg)](#-design-system)
[![Security](https://img.shields.io/badge/Privacy-Local--First_Storage_%7C_PIN_Lock-10b981.svg)](#-security--data-privacy)
[![Workflow](https://img.shields.io/badge/Workflow-Human--in--the--Loop_Consent-f59e0b.svg)](#-ethical-ai--student-guardrails)

> **CampusPilot AI** is an **AI-assisted student career platform and auto-apply assistant with student-controlled final submission**. It bridges the gap between university students and verified internships / campus placement opportunities. The platform intelligently parses candidate profiles, evaluates multi-dimensional job eligibility, tailors ATS resumes, pre-fills complex applications, alerts students via automated email notifications, and maintains an audit trail—keeping the student firmly in control at every step.

---

## 📌 Table of Contents

- [🎯 Problem Statement](#-problem-statement)
- [💡 The CampusPilot Solution](#-the-campuspilot-solution)
- [📸 Platform Screenshots & UI Showcase](#-platform-screenshots--ui-showcase)
- [⚖️ What Makes CampusPilot AI Different?](#%EF%B8%8F-what-makes-campuspilot-ai-different)
- [🛡️ Ethical AI & Student Guardrails](#%EF%B8%8F-ethical-ai--student-guardrails)
- [✨ Key Platform Features](#-key-platform-features)
- [🧠 Intelligence & Matching Architecture](#-intelligence--matching-architecture)
- [📬 Automated Email Notification System](#-automated-email-notification-system)
- [🔒 Security & Data Privacy](#-security--data-privacy)
- [🛡️ Opportunity Verification & Safety Engine](#%EF%B8%8F-opportunity-verification--safety-engine)
- [🛠️ Tech Stack & Implementation Reality](#%EF%B8%8F-tech-stack--implementation-reality)
- [📁 Modular Engine Architecture](#-modular-engine-architecture)
- [🚀 Quick Start & Installation](#-quick-start--installation)
- [🎨 Design System](#-design-system)
- [📄 License & Authors](#-license--authors)

---

## 🎯 Problem Statement

University students preparing for technical internships and full-time campus placements encounter several friction points during their job search:

1. **Fragmented Opportunity Discovery**: Students spend hours scouring LinkedIn, Internshala, Unstop, company career pages, and WhatsApp groups for verified openings.
2. **Hidden Eligibility Mismatches**: Applying to roles without knowing exact branch, year, GPA cutoffs, or missing prerequisite skills leads to silent ATS rejections.
3. **Generic Resumes vs. Strict ATS Filters**: Submitting one static resume for diverse roles (e.g., Backend vs. ML Engineering) causes low ATS keyword scores.
4. **Repetitive, Tedious Form Filling**: Typing identical personal, academic, project, and essay answers across dozens of application forms creates application fatigue.
5. **Disconnected Preparation**: Studying DSA, practicing mock interviews, building resumes, and tracking submitted jobs happen across multiple disconnected tools.
6. **Application Tracking Chaos**: Applications, confirmation IDs, deadlines, and follow-ups are lost in unorganized browser bookmarks and spreadsheets.

---

## 💡 The CampusPilot Solution

CampusPilot AI brings the entire collegiate career lifecycle into one unified, local-first workspace:

```
                               THE CAMPUSPILOT AI PIPELINE
                               
   [ Discovery & Verification ] ──▶ Curated Paid & Unpaid Opportunities (Auto-Scanned)
                 │
                 ▼
   [ Profile & Parsing Engine ] ──▶ Structured Profile Extraction from Resume / Text
                 │
                 ▼
   [ Multi-Dimensional Match  ] ──▶ Skills (50%) + Eligibility (30%) + Goals (20%)
                 │
                 ▼
   [ Smart Tailoring & Pre-Fill] ──▶ Dynamic Resume Reordering & Role-Specific Form Pre-Fill
                 │
                 ▼
   [ Human-in-the-Loop Review ] ──▶ Student inspects, edits & provides explicit consent
                 │
                 ▼
   [ Submission & Tracking ID ] ──▶ Official Career Portal Routing + Receipt (CP-CONF-XXXXXX)
                 │
                 ▼
   [ Lifecycle Audit Tracker  ] ──▶ Real-time Status: PREPARED ➔ SUBMITTED ➔ INTERVIEW
```

---

## 📸 Platform Screenshots & UI Showcase

### 🌐 3D Isometric Platform Architecture & Command Center
High-depth 3D isometric overview showing floating glassmorphism dashboard cards, live ATS gauge, automated email alert dispatcher, and verified internship feeds:

![CampusPilot AI 3D Isometric Showcase](./assets/screenshots/campuspilot_3d_mockup.jpg)

---

### 🏠 1. Dashboard & Auto-Apply Center
The central command hub displaying real-time metrics, stipend breakdowns, high-match opportunities ($\ge 80\%$), and 1-click candidate preparation controls:

![CampusPilot AI Dashboard & Auto-Apply Center](./assets/screenshots/dashboard_preview.jpg)

---

### ✨ 2. AI Career Resume Studio — 4 Professional ATS Templates
Client-side resume optimizer featuring live ATS score auditing, keyword density checks, and direct PDF generation:

| 🏛️ ATS Classic Professional | 💻 Modern Tech / Developer |
| :---: | :---: |
| ![ATS Classic Template](./assets/templates/ats_preview.jpg) | ![Modern Tech Template](./assets/templates/modern_dev_preview.jpg) |
| *Single-column ATS standard layout* | *Optimized for GitHub & software projects* |

| 🔬 AI & ML Research | ⚡ Minimal Clean Executive |
| :---: | :---: |
| ![AI Tech Template](./assets/templates/ai_tech_preview.jpg) | ![Minimal Template](./assets/templates/minimal_preview.jpg) |
| *Highlights benchmarks & model architectures* | *Clean typography with balanced whitespace* |

---

## ⚖️ What Makes CampusPilot AI Different?

| Dimension | Traditional Job Portals (LinkedIn, Indeed) | Generic Resume Builders | CampusPilot AI |
| :--- | :--- | :--- | :--- |
| **Opportunity Matching** | Keyword search with sponsored clutter | N/A (Document only) | **Multi-dimensional fit score** (Skills + Degree + GPA + Year + Target Role) |
| **Resume Strategy** | Static PDF upload per job | Manual template editing | **Dynamic ATS tailoring & keyword reordering** tailored per role |
| **Application Process** | 100% manual repetitive form typing | None | **AI-assisted pre-fill with student-controlled review & approval** |
| **Paid / Unpaid Filtering** | Mixed listings, often misleading stipends | None | **Dedicated stipend filter** (Paid, Unpaid, Min. Stipend Threshold) |
| **Submission Safety** | Manual or unmonitored bots | None | **Human-in-the-loop consent boundary** + Anti-fabrication guarantee |
| **Email Alert System** | Irrelevant marketing blasts | None | **Match-threshold filtered notifications ($\ge 80\%$)** across 8 categories |
| **Career Preparation** | Separate platforms (LeetCode, Pramp) | None | **Integrated Placement Readiness (100 pts), Mock Interviews & Roadmaps** |
| **Data Privacy** | Cloud account required, data monetization | Cloud account required | **Local-first client storage** + Master PIN Vault |
| **Tracking & Verification** | Basic email confirmation | None | **Unique Application Confirmation IDs (`CP-CONF-XXXXXX`)** + Portal Links |

---

## 🛡️ Ethical AI & Student Guardrails

CampusPilot AI strictly enforces a **Human-in-the-Loop AI Ethics Standard**:

> [!IMPORTANT]
> **CampusPilot AI is an AI-assisted application accelerator, NOT an unattended bot.** Final submission always requires explicit student review and authorization.

- 🔒 **No Unattended Auto-Submission**: The platform pre-compiles tailored resumes and drafts role answers. The student reviews, edits, and explicitly clicks **Approve & Submit**.
- 🚫 **Zero Qualification Fabrication**: The system *never* invents companies, creates fake project experience, or claims unearned skills. It only highlights and reorganizes candidate facts.
- 🎓 **Immutable Academic Credentials**: GPA, university name, branch, and graduation year are locked to the student profile and never modified to artificially bypass filters.
- 👁️ **Full Transparency**: Every generated sentence and auto-filled field is editable in real time before submission.
- 📜 **Audit Trail**: Every prepared package and submission is assigned a unique confirmation ID (`CP-CONF-XXXXXX`), timestamp, and lifecycle log.

---

## ✨ Key Platform Features

### 1. 📧 Automated Email Notification System & Live Mailbox
- **Smart Match Thresholds**: Strict matching rules ensure career emails trigger only when fit meets or exceeds the student's threshold (default: $\ge 80\%$).
- **8 Dedicated Career Categories**:
  1. 🎯 **Internship Match Alerts**: Company, role, stipend, location, matched skills, and direct portal apply links.
  2. 💼 **Full-Time Job Alerts**: Campus placement roles with CTC compensation breakdowns.
  3. ⏰ **Deadline Reminders**: High-priority alerts when saved applications close within $\le 3$ days.
  4. 🎤 **Interview Alerts & Prep**: Scheduling confirmation paired with practice questions.
  5. 📄 **Resume ATS Score Updates**: Notifications when resume optimization reaches a new high score.
  6. 📚 **Daily Placement Study Reminders**: Study milestone reminders and daily DSA problem streaks.
  7. 🧠 **Skill Gap Recommendations**: Alerts highlighting missing frameworks (e.g., PyTorch, Docker) that unlock new roles.
  8. 🚀 **Curated Opportunity Digests**: Periodic rollups of top campus opportunities.
- **Interactive Live Mailbox & Viewer**: Built-in dual-pane inbox with search, unread badges, desktop (600px) / mobile (380px) viewport modes, and HTML source copier.
- **Multi-Provider Support**: Zero-config Local HTTP Server Relay, Resend REST API integration, and Custom Webhook relays.

### 2. 🚀 Auto-Apply Center & Paid/Unpaid Opportunity Engine
- **Stipend Classification**: Distinct badge indicators and filters for **Paid Internships** (with monthly stipend), **Unpaid Internships** (research/experience), and **Stipend Not Disclosed**.
- **Minimum Stipend Threshold**: Set minimum monthly stipend requirements (e.g., $\ge ₹25,000/\text{month}$).
- **Batch Application Preparation**: 1-Click preparation of all qualified openings into a streamlined review queue.
- **Real-Time Metrics Grid**: Interactive metric cards showing counts for Paid, Unpaid, High Match ($\ge 80\%$), Ready to Apply, Submitted, and Interviews.

### 3. 📄 Structured Student Application Profile & Resume Parser
- Parses raw resume files (PDF, DOCX, TXT) or raw text into a normalized candidate data model:
  - **Personal Details**: Full name, email address, phone, current city.
  - **Academic Records**: Institution, degree (B.Tech, M.Tech, BCA, MCA), branch, graduation year, GPA/percentage.
  - **Technical Portfolio**: Core languages, frameworks, developer tools, database engines.
  - **Projects & Work History**: Project titles, quantified impact bullet points, live demo links.
  - **External Profiles**: GitHub username, LinkedIn URL, personal portfolio website.

### 4. 🎯 Eligibility & Multi-Dimensional Match Engine
- **Algorithmic Fit Calculation**: Multi-factor scoring weighting Technical Skills (50%), Academic Eligibility (30%), and Career Interest Alignment (20%).
- **Skill Gap Diagnosis**: Clear visual breakdown of **Matched Skills** (e.g., `✓ Python`, `✓ SQL`) vs. **Missing Skill Warnings** (e.g., `⚠ Missing Docker`).
- **Academic Eligibility Validation**: Automatic checks for graduation year, minimum GPA threshold, and eligible degree streams.

### 5. 📝 Smart Resume Tailoring & Form Auto-Fill
- **Dynamic Skill Reordering**: Reorders the candidate's skill taxonomy to prioritize technologies requested by the target job description.
- **Contextual Summary Generation**: Generates targeted 2-3 sentence executive statements matching the candidate's background to the employer's domain.
- **Automated Form Response Drafting**: Generates context-aware answers to common screening questions (e.g., *"Why are you interested in this role?"*, *"Describe a challenging technical project."*).
- **Safety Workflow**: `Auto-Prepare ➔ Auto-Fill ➔ Student Review & Edit ➔ Submit`.

### 6. 📋 Application Lifecycle Audit Tracker & Confirmation IDs
- **Unique Confirmation Identifiers**: Generates unique application receipts (e.g., `CP-CONF-849201`) with verified timestamp logs.
- **Lifecycle Status Management**: Tracks application progression across standard hiring stages: `PREPARED` ➔ `SUBMITTED` ➔ `UNDER REVIEW` ➔ `INTERVIEW SCHEDULED` ➔ `OFFER RECEIVED` / `REJECTED`.
- **Portal Routing**: Direct links to official company Workday, Greenhouse, Lever, Google, Microsoft, and NVIDIA career portals.

### 7. ✨ AI Career Resume Studio & 4-Template ATS Generator
- **4 Professional ATS Templates**: ATS Classic, Modern Tech, AI & Research, and Minimal Clean.
- **Client-Side PDF Generation**: Direct in-browser export via `html2pdf.js` with zero third-party document uploads.
- **Live ATS Score Audit**: Real-time evaluation of keyword density, quantified action verbs (X-Y-Z formula), section header standards, and length.

### 8. 🏆 Placement Readiness, Mock Interviews & Skill Gap Roadmaps
- **100-Point Placement Readiness Score**: Comprehensive score combining DSA & Problem Solving (25 pts), GitHub Portfolio Quality (25 pts), Resume ATS Strength (25 pts), and Mock Interview Performance (25 pts).
- **Interactive Mock Interview Simulator**: Technical and HR practice questions tailored by role (Software Engineer, ML Engineer, Frontend Dev, Data Analyst) with instant scoring across technical depth, communication, and keyword usage.
- **4-Year Career Milestone Generator**: Semester-by-semester roadmaps detailing focus areas from Year 1 fundamentals to Year 4 campus placement drives.
- **Targeted Skill Gap Curriculums**: 7-day upskilling roadmaps with curated course and documentation recommendations.

### 9. 👥 Collaborative Team Finder & Hackathon Teammate Matching
- **Peer Matching Engine**: Match with university peers for hackathons, capstone projects, and open-source contributions.
- **Skill Balance Analysis**: Identifies team skill coverage across Frontend, Backend, AI/ML, DevOps, and UI/UX to highlight missing pillars.

---

## 🧠 Intelligence & Matching Architecture

CampusPilot AI currently employs a **hybrid intelligence layer**: deterministic, rule-based NLP algorithms handle parsing, eligibility validation, and scoring, while dynamic template generators craft tailored summaries and application answers.

```
                        INTELLIGENCE & MATCHING PIPELINE
                           
 ┌────────────────────────┐         ┌────────────────────────┐
 │   Student Resume Text  │         │ Opportunity Schema (JD)│
 └───────────┬────────────┘         └───────────┬────────────┘
             │                                  │
             ▼                                  ▼
 ┌────────────────────────┐         ┌────────────────────────┐
 │  resumeProfileEngine   │         │  mockOpportunities.js  │
 │  (Heuristic NLP Rules) │         │  (Requirement Schema)  │
 └───────────┬────────────┘         └───────────┬────────────┘
             │                                  │
             │   Candidate Profile Object       │   Job Requirements
             └──────────────┬───────────────────┘
                            ▼
              ┌───────────────────────────┐
              │     matchingEngine.js     │
              │  Multi-Dimensional Match  │
              └─────────────┬─────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
 ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
 │ Skills Fit   │    │  Academic    │    │ Role/Domain  │
 │ Weight: 50%  │    │  Weight: 30% │    │ Weight: 20%  │
 └──────┬───────┘    └──────┬───────┘    └──────┬───────┘
        └───────────────────┼───────────────────┘
                            ▼
              ┌───────────────────────────┐
              │ Overall Match Score (0-100│
              │ Matched vs Missing Skills │
              └─────────────┬─────────────┘
                            ▼
              ┌───────────────────────────┐
              │    resumeTailorEngine     │
              │ • Reorders Skill Priority │
              │ • Focuses Key Projects    │
              │ • Template-based Summary  │
              └─────────────┬─────────────┘
                            ▼
              ┌───────────────────────────┐
              │ applicationFormEngine.js  │
              │ • Pre-fills Personal Info │
              │ • Dynamic Template Answers│
              └─────────────┬─────────────┘
                            ▼
              ┌───────────────────────────┐
              │ 🛡️ STUDENT REVIEW MODAL   │
              │ (Inspect • Edit • Consent)│
              └─────────────┬─────────────┘
                            ▼
              ┌───────────────────────────┐
              │   autoApplyEngine.js      │
              │ • Issues Unique CP-CONF ID│
              │ • Records to Audit Log    │
              └───────────────────────────┘
```

### Match Scoring Formula
$$\text{Overall Fit Score} = (\text{Skills Match} \times 0.50) + (\text{Academic Eligibility} \times 0.30) + (\text{Domain Interest} \times 0.20)$$

- **Skills Match ($50\%$)**: Exact and sub-string token matching of candidate skills against required technologies.
- **Academic Eligibility ($30\%$)**: Strict evaluation against target academic year ($-35$ if mismatched), degree type ($-35$), and minimum GPA requirement ($-30$).
- **Domain Interest ($20\%$)**: Semantic overlap between candidate career objectives, past project tags, and role description.

### Division of Responsibility & LLM Extensibility:
- **Current Heuristic / Rule Engines**: Entity extraction (`resumeProfileEngine.js`), ATS keyword density calculation (`resumeAnalyzer.js`), and fit scoring (`matchingEngine.js`).
- **Current Dynamic Template Generation**: Tailored executive summaries and screening question drafting (`applicationFormEngine.js`, `resumeTailorEngine.js`).
- **Future LLM API Plugin**: The architecture includes modular integration hooks designed for external LLMs (e.g. Gemini API, OpenAI API) where student-provided API keys and explicit consent boundaries govern external data transmission.

---

## 📬 Automated Email Notification System

The email notification subsystem can run continuously to notify students about high-match opportunities, urgent deadlines, and interview invitations.

```
                           EMAIL NOTIFICATION PIPELINE
                           
 [ Opportunity Scanned / Event ] ──▶ [ Notification Engine ] (Deduplication & Frequency Check)
                                              │
                                              ▼
 [ Match Filter (e.g. >= 80%)  ] ──▶ [ Email Template Generator ] (8 HTML Responsive Layouts)
                                              │
                                              ▼
                                 [ Delivery Carrier Gateway ]
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
          [ Local HTTP Server ]       [ Resend REST API ]      [ Custom Webhook Relay ]
          (python server.py:8080)     (Bearer Token Auth)      (POST to endpoint URL)
                    │                         │                         │
                    └─────────────────────────┼─────────────────────────┘
                                              ▼
                                  [ Student Personal Inbox ]
                                              +
                                 [ In-App Live Mailbox UI ]
```

### Delivery Providers Supported:
1. **Local Development Server (`server.py`)**: Built-in Python HTTP server that receives POST payloads and logs email dispatches to stdout.
2. **Resend API**: Transactional email delivery using a student-provided Resend API key.
3. **Custom HTTP Webhook Relay**: Connects to Zapier, Make, n8n, or custom email webhooks via HTTPS.
4. **Direct In-App Mailbox**: Local state outbox viewable instantly inside the **Live Mailbox** UI.

---

## 🔒 Security & Data Privacy

CampusPilot AI handles personal student information (resumes, GPAs, contact numbers, email addresses, and application history). The application adopts a **local-first privacy approach with optional external email integrations**:

```
                          LOCAL-FIRST DATA & PRIVACY MODEL
                            
 ┌────────────────────────────────────────────────────────────────────────┐
 │                      BROWSER LOCAL STORAGE                             │
 │                                                                        │
 │   ┌───────────────────────┐             ┌──────────────────────────┐   │
 │   │  Candidate Resume PII │             │   Master PIN Lock        │   │
 │   │  (Name, GPA, Phone)   │             │   (Salted SHA-256 Hash)  │   │
 │   └───────────┬───────────┘             └─────────────┬────────────┘   │
 │               │                                       │                │
 │               ▼                                       ▼                │
 │   ┌────────────────────────────────────────────────────────────┐       │
 │   │             securityShield.js (Security Engine)            │       │
 │   │  • XSS Entity Escaping (`escapeHTML`)                      │       │
 │   │  • Script Tag / Handler Stripping (`sanitizeText`)         │       │
 │   │  • Safe Protocol Whitelist (`https://`, `mailto:`)         │       │
 │   │  • Token Display Obfuscation (`re_1234••••••••5678`)       │       │
 │   └───────────────────────────┬────────────────────────────────┘       │
 │                               │                                        │
 │                               ▼                                        │
 │   ┌────────────────────────────────────────────────────────────┐       │
 │   │               Local Storage (Zero Third-Party Trackers)    │       │
 │   └────────────────────────────────────────────────────────────┘       │
 └────────────────────────────────────────────────────────────────────────┘
```

### Security & Privacy Safeguards:
- **Local-First Data Storage**: Candidate resumes, GPAs, and application histories are stored locally in the browser's `localStorage`. No third-party tracking or advertising scripts are embedded.
- **Salted SHA-256 Hashing for Local PIN Verification**: Protects the student's open workspace on shared lab machines via master PIN verification (`securityShield.js`). *(Note: In multi-user server backends, standard key-derivation algorithms like PBKDF2 or Argon2id should be used.)*
- **Strict XSS Input Sanitization**: All user-submitted text, resume bullets, and team pitches pass through `escapeHTML()` and `sanitizeText()` to prevent script injection.
- **Safe URL Protocol Whitelist**: External career portal links are strictly validated against an approved protocol whitelist (`http://`, `https://`, `mailto:`) to prevent `javascript:` and `data:text/html` URI exploits.
- **API Token Display Masking**: Sensitive provider tokens (such as Resend API keys) are obfuscated in the UI (`maskSensitiveToken`).
- **Data Portability & 1-Click Purge**: Students can export a complete JSON data vault backup (`.cpvault`) or execute an irreversible 1-click wipe of all local records (`purgeAllLocalData`).
- **Transport Security**: External production API and webhook requests should use HTTPS. Local development may use HTTP on `localhost:8080`.

---

## 🛡️ Opportunity Verification & Safety Engine

To protect students from scam listings, unpaid exploitation disguised as full-time roles, and expired links, CampusPilot AI defines a structured opportunity verification model:

```
                          OPPORTUNITY VERIFICATION MODEL
                          
 [ Ingested Opportunity ] ──▶ 1. Official Domain Mapping (Workday, Google, Microsoft, NVIDIA)
                                        │
                                        ▼
                              2. Anti-Scam Rules (Flags payment-required / fee listings)
                                        │
                                        ▼
                              3. Deadline & TTL Validator (Filters expired positions)
                                        │
                                        ▼
                              4. Duplicate Suppression (Composite key hashing)
                                        │
                                        ▼
                              5. Verified Opportunity Badge Granted (Green "✓ Verified" Pill)
```

### Implementation Architecture:
- **Current Implementation**: Uses a structured, curated opportunity dataset ([`mockOpportunities.js`](./js/data/mockOpportunities.js)) mapping to verified official career portals (Google, Microsoft, NVIDIA, Amazon, Hugging Face), with pre-configured eligibility criteria, questions, and stipend disclosures for demonstration.
- **Planned Production Implementation**: An automated web crawling and ATS API ingestion engine (integrating with Workday, Greenhouse, and Lever feeds) that dynamically parses live postings, executes real-time TTL expiration checks, and applies automated fee-charging scam filters.

---

## 🛠️ Tech Stack & Implementation Reality

CampusPilot AI is engineered with a **zero-build, high-performance architecture** utilizing modern ES6+ JavaScript modules:

| Subsystem | Technologies Used | Technical Implementation Details |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5, Vanilla JavaScript (ES6+), Tailwind CSS CDN | Modular component rendering using lightweight template literals, zero node build step required. |
| **Styling & Theme** | Custom CSS (`styles.css`) + Tailwind Dark Mode | Dark Glassmorphism system (`#090d16` obsidian base, `backdrop-filter: blur(16px)`, neon accents). |
| **Intelligence Layer** | Client-side Heuristic & NLP Service Engines | Pure JavaScript engines for token matching, ATS scoring, career roadmaps, and readiness evaluation. |
| **Document Export** | `html2pdf.js` CDN | Direct client-side vector PDF generation from styled HTML resume templates. |
| **Data Storage** | Browser `localStorage` + Memory State | Local-first store for candidate profiles, application tracking, PIN hash, and email outbox. |
| **Security & PIN** | Web Crypto API (`window.crypto.subtle`) | Salted SHA-256 hashing for local PIN verification, XSS sanitizers, and token masking. |
| **Email Dispatcher** | Python 3 (`server.py`) / Resend REST API | Lightweight local HTTP development server with `/api/send-email` endpoint + Resend Cloud API support. |

---

## 📁 Modular Engine Architecture

The codebase is organized into **specialized modular services** located in [`js/services/`](./js/services/):

```
CampusPilot AI/
├── index.html                           # Main application entry point & root container
├── styles.css                           # Glassmorphism design system, badges & CSS variables
├── app.js                               # Core UI router, view state & interaction manager
├── server.py                            # Optional local HTTP server & email dispatch handler
├── assets/
│   ├── screenshots/
│   │   └── dashboard_preview.jpg        # Platform UI dashboard screenshot
│   └── templates/                       # Resume template thumbnail previews
│       ├── ats_preview.jpg
│       ├── modern_dev_preview.jpg
│       ├── ai_tech_preview.jpg
│       └── minimal_preview.jpg
├── js/
│   ├── data/
│   │   └── mockOpportunities.js         # Curated opportunity dataset & schema
│   └── services/
│       │  ── [ CORE AUTO-APPLY & MATCHING SUBSYSTEM ] ──
│       ├── autoApplyEngine.js           # Auto-Apply orchestrator & confirmation ID generator
│       ├── resumeProfileEngine.js       # Resume parser & candidate profile builder
│       ├── matchingEngine.js            # Multi-dimensional match scoring engine
│       ├── eligibilityEngine.js         # Academic year, degree & GPA eligibility validator
│       ├── resumeTailorEngine.js        # Dynamic skill reordering & summary tailoring
│       ├── applicationFormEngine.js     # Form auto-fill & contextual answer generator
│       ├── internshipFilterEngine.js    # Paid/unpaid filtering & minimum stipend rules
│       ├── applicationTracker.js        # Metrics calculator for application states
│       ├── applicationHistoryService.js # Application lifecycle persistence & audit logger
│       │
│       │  ── [ CAREER READINESS & PREPARATION SUBSYSTEM ] ──
│       ├── resumeAnalyzer.js            # ATS score calculator, impact metrics & keyword audit
│       ├── resumeStudioEngine.js        # AI Resume Studio, 4 HTML templates & PDF engine
│       ├── placementReadinessEngine.js  # 100-Point placement readiness evaluator
│       ├── mockInterviewEngine.js       # Technical & HR mock interview simulator
│       ├── careerRoadmapEngine.js       # 4-Year career milestone generator
│       ├── skillGapEngine.js            # 7-Day skill gap curriculum planner
│       ├── githubAnalyzer.js            # GitHub repository & commit streak evaluator
│       ├── courseRecommender.js         # Course recommendations for missing skills
│       ├── deadlineReminderService.js   # Deadline countdown tracker
│       ├── teamFinder.js                # Hackathon team finder & teammate skill gap analyzer
│       │
│       │  ── [ COMMUNICATIONS & DISPATCH SUBSYSTEM ] ──
│       ├── emailNotificationService.js  # 8 HTML email templates, mailbox & dispatch carrier
│       ├── notificationEngine.js        # In-app toast alerts, deduplicator & sound chime
│       │
│       │  ── [ SECURITY & PRIVACY SUBSYSTEM ] ──
│       └── securityShield.js            # Master PIN verification, XSS shield & data purge
└── README.md                            # Comprehensive project documentation
```

### Modular Services Breakdown:

| Module | File | Primary Responsibility |
| :--- | :--- | :--- |
| **Auto-Apply Orchestrator** | [`autoApplyEngine.js`](./js/services/autoApplyEngine.js) | Coordinates profile extraction, tailoring, auto-fill, and issues IDs (`CP-CONF-XXXXXX`). |
| **Matching Engine** | [`matchingEngine.js`](./js/services/matchingEngine.js) | Computes weighted match score ($50\%$ skills, $30\%$ academic, $20\%$ interest). |
| **Eligibility Validator** | [`eligibilityEngine.js`](./js/services/eligibilityEngine.js) | Validates degree, graduation year, and minimum GPA constraints. |
| **Resume Tailor** | [`resumeTailorEngine.js`](./js/services/resumeTailorEngine.js) | Reorders candidate skills and tailors executive summaries per job description. |
| **Form Auto-Filler** | [`applicationFormEngine.js`](./js/services/applicationFormEngine.js) | Pre-fills form fields and drafts answers to employer screening questions. |
| **Resume Studio Engine** | [`resumeStudioEngine.js`](./js/services/resumeStudioEngine.js) | Powers the AI Resume Studio, 4 professional templates, and client-side PDF export. |
| **ATS Resume Analyzer** | [`resumeAnalyzer.js`](./js/services/resumeAnalyzer.js) | Audits keyword density, X-Y-Z bullet impact, and formatting compliance. |
| **Email Notification Engine** | [`emailNotificationService.js`](./js/services/emailNotificationService.js) | Manages 8 responsive HTML templates, provider relays, and the Live Mailbox. |
| **Placement Readiness Engine** | [`placementReadinessEngine.js`](./js/services/placementReadinessEngine.js) | Evaluates overall 100-point candidate placement readiness score. |
| **Mock Interview Simulator** | [`mockInterviewEngine.js`](./js/services/mockInterviewEngine.js) | Simulates technical and HR interview rounds with real-time feedback. |
| **Security Shield Engine** | [`securityShield.js`](./js/services/securityShield.js) | Enforces XSS sanitization, PIN lock protection, and secure data backups. |
| **Team Finder Engine** | [`teamFinder.js`](./js/services/teamFinder.js) | Connects students for hackathon teams and evaluates team skill coverage. |

---

## 🚀 Quick Start & Installation

Because CampusPilot AI is built with modern ES6 modules, you can run it immediately without requiring a heavy `npm install` build chain!

### Option A: Local Python Web Server (Recommended)
This runs the web application along with the local email dispatch handler:

```bash
# 1. Clone the repository
git clone https://github.com/saiprakashneelavar/CampusPilot-AI.git

# 2. Navigate to project root
cd "CampusPilot-AI"

# 3. Start the local server
python server.py
```
Open your browser at **`http://localhost:8080`**.

---

### Option B: Using Node `http-server` / `npx`
```bash
npx http-server . -p 8080
```
Open your browser at **`http://localhost:8080`**.

---

### Option C: Direct Browser Launch
Open [`index.html`](./index.html) directly in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).

---

## 🎨 Design System & 3D Spatial UI

CampusPilot AI utilizes a custom **3D Dark Glassmorphism Design System** defined in [`styles.css`](./styles.css):

- **3D Perspective & Spatial Depth**: `perspective: 1200px` container context with `transform-style: preserve-3d` and multi-layered elevation (`translateZ(8px)` to `translateZ(35px)`).
- **Interactive 3D Tilt**: Dynamic hover transforms (`rotateX(2deg) rotateY(-1.5deg)`) with holographic sheen reflection layers on cards and metric widgets.
- **3D Tactile Buttons**: Physical bevel depth (`box-shadow: 0 4px 0 rgba(67, 56, 202, 0.9)`) with realistic press depression kinematics.
- **Background Canvas**: Obsidian midnight blue (`#090d16`) with subtle ambient radial depth gradients.
- **Glassmorphism Panels**: High-density backdrop blur (`backdrop-filter: blur(16px)`) with glowing translucent borders (`rgba(99, 102, 241, 0.25)`).
- **Typography**: 
  - **Headings**: `Outfit`, sans-serif (700/800/900 weight).
  - **Body & Controls**: `Plus Jakarta Sans`, sans-serif.
  - **Code, Badges & Receipts**: `JetBrains Mono`, monospace.
- **Status & Type Badge Palette**:
  - `badge-paid`: Emerald green (`#10b981`) for paid opportunities with stipend.
  - `badge-unpaid`: Amber gold (`#f59e0b`) for unpaid/mentorship positions.
  - `badge-undisclosed`: Slate gray (`#64748b`) for undisclosed compensation.
  - `badge-missing-skill`: Crimson red (`#ef4444`) for prerequisite skill warnings.

---

## 📄 License & Authors

Distributed under the **MIT License**. See `LICENSE` for details.

### Author & Developer
- **Sai Prakash Neelavar**
- **Repository**: [CampusPilot-AI](https://github.com/saiprakashneelavar/CampusPilot-AI)
- **Role**: AI Engineering & Software Architecture

---

*Built with ❤️ to empower students in navigating internship discovery, placement preparation, and automated career workflows.*
