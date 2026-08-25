// CampusPilot AI - Structured Candidate Resume & Application Profile Engine

function buildStudentProfile(rawProfileData = {}) {
  const raw = rawProfileData || {};
  const edu = raw.education || {};
  const defaults = {
    fullName: raw.name || raw.fullName || "Alex Chen",
    name: raw.name || raw.fullName || "Alex Chen",
    email: raw.email || "alex.chen@example.com",
    phone: raw.phone || "+91 98765 43210",
    degree: raw.degree || edu.degree || "B.Tech",
    branch: raw.branch || edu.branch || "Computer Science & Engineering",
    graduationYear: raw.graduationYear || edu.graduationYear || "2027",
    year: raw.year || raw.currentYear || edu.currentYear || "Year 3",
    currentYear: raw.year || raw.currentYear || edu.currentYear || "Year 3",
    gpa: raw.gpa || edu.gpa || "8.9",
    city: raw.city || edu.city || "Bengaluru, India",
    education: {
      institution: raw.institution || edu.institution || "National Institute of Technology",
      degree: raw.degree || edu.degree || "B.Tech",
      branch: raw.branch || edu.branch || "Computer Science & Engineering",
      graduationYear: raw.graduationYear || edu.graduationYear || "2027",
      currentYear: raw.year || raw.currentYear || edu.currentYear || "Year 3",
      gpa: raw.gpa || edu.gpa || "8.9",
      city: raw.city || edu.city || "Bengaluru, India"
    },
    skills: Array.from(new Set([...(raw.skills || []), "Python", "Machine Learning", "SQL", "Git", "Data Structures", "Algorithms", "React"])),
    projects: raw.projects && raw.projects.length > 0 ? raw.projects : [
      {
        title: "Autonomous Agent & AI Career Navigator",
        description: "Built multimodal agentic system for matching student skills to verified internships.",
        tech: "Python, PyTorch, React, SQL"
      }
    ],
    certifications: raw.certifications || ["Google AI & Machine Learning Professional Certificate"],
    experience: raw.experience || [],
    socialLinks: {
      github: raw.github || raw.socialLinks?.github || "https://github.com/alexchen-dev",
      linkedin: raw.linkedin || raw.socialLinks?.linkedin || "https://linkedin.com/in/alexchen",
      portfolio: raw.portfolio || raw.socialLinks?.portfolio || "https://alexchen.dev"
    },
    resumeFile: raw.resumeFile || "Alex_Chen_Resume_2026.pdf",
    resumeVerified: true,
    targetRoles: raw.targetRoles || ["AI/ML Engineering Intern", "Software Developer Intern", "Full Stack AI Engineer"]
  };

  return defaults;
}

function extractSkillsFromText(text) {
  if (!text) return [];
  const catalog = [
    "Python", "C++", "Java", "C#", "JavaScript", "TypeScript", "React", "Node.js", 
    "SQL", "Machine Learning", "TensorFlow", "PyTorch", "Data Structures", 
    "Algorithms", "System Design", "CUDA", "NLP", "Git", "Docker", "HTML", "CSS", "UI/UX Design",
    "C", "Parallel Computing", "Data Visualization", "Data Science"
  ];
  
  const textLower = text.toLowerCase();
  return catalog.filter(skill => {
    const sLower = skill.toLowerCase();
    if (sLower === "c") {
      return /\bc\b/i.test(text);
    }
    return textLower.includes(sLower);
  });
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.buildStudentProfile = buildStudentProfile;
  window.CampusPilotServices.extractSkillsFromText = extractSkillsFromText;
}

