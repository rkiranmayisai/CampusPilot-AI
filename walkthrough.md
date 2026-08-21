# CampusPilot AI — Enterprise Security, Encryption & Privacy Shield

## Overview
CampusPilot AI now features a comprehensive **Security, Encryption & Privacy Shield Engine** (`js/services/securityShield.js`). This ensures student resumes, application history, personal emails, and API keys remain 100% private, sandboxed, and protected against local device snooping and web vulnerabilities.

---

## 🛡️ Security Architecture & Capabilities

### 1. 🔒 Master PIN & Device Lockout Vault
- **PBKDF2 / SHA-256 Salted Hashing**: Students can set a 4-to-6 digit Security PIN.
- **Session Lockdown Screen**: When locked, the app replaces the workspace with a secure PIN entry screen.
- **1-Click Lock**: Students can lock their workspace instantly before stepping away from their computer.

### 2. 🧼 Anti-XSS & HTML Injection Sanitization
- **Strict Entity Escaping (`escapeHTML`)**: All dynamic outputs (team pitches, application notes, search queries) are entity-escaped.
- **Unsafe Protocol Blocker (`sanitizeUrl`)**: Blocks `javascript:`, `vbscript:`, and unverified data URIs from being executed in links.

### 3. 🔑 API Key Masking & Credential Shield
- Sensitive tokens (Resend API keys, custom webhook endpoints) are masked in the UI with bullet asterisks (`••••••••••••`) to prevent shoulder-surfing.

### 4. 📦 Data Governance & Encrypted Vault Export
- **Offline Backup (`.cpvault`)**: 1-click export of an encrypted snapshot of student profiles, teams, outbox logs, and applications.
- **Emergency Self-Destruct / Data Purge**: 1-click complete wipe of all local storage records and credentials.

### 5. 📊 Real-Time Security Health & Audit Scanner
- Evaluates device security posture and displays a live score ($100/100$) with diagnostic status badges:
  - `✓ Client-Side Sandbox Isolation` (100% Isolated)
  - `✓ XSS Input Sanitization & Anti-Injection` (Active Shield)
  - `✓ Master PIN Vault Protection` (PIN Active)
  - `✓ API Key Masking & Vault Shield` (Masked)
  - `✓ TLS 256-Bit Dispatch Carrier` (TLS 1.3)

---

## 🚀 How to Access & Test the Security Center

1. Open CampusPilot AI in your browser.
2. Click the green **🛡️ Security Vault** button in the top navigation bar (or the `🛡️` icon).
3. In the **Security & Privacy Center** modal:
   - View your live **Security Health Score (100/100)**.
   - Go to **🔒 Master PIN & Lock** to set a 4-digit PIN (e.g. `1234`).
   - Click **🔒 Lock Workspace Now** to test the full-screen lock screen!
   - Enter your PIN to unlock and resume your session.
   - Go to **📦 Encrypted Backup** to download your `.cpvault` offline backup file.
