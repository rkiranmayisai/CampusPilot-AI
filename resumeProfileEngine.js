// CampusPilot AI - Structured Candidate Resume & Application Profile Engine

function buildStudentProfile(rawProfileData = {}) {
  const defaults = {
    fullName: rawProfileData.name || rawProfileData.fullName || "Sai Prakash Neelavar",
    name: rawProfileData.name || rawProfileData.fullName || "Sai Prakash Neelavar",
    email: rawProfileData.email || "saiprakashneelavar@gmail.com",
    phone: rawProfileData.phone || "+91 98765 43210",
    education: {
      institution: rawProfileData.institution || rawProfileData.education?.institution || "National Institute of Technology",
      degree: rawProfileData.degree || rawProfileData.education?.degree || "B.Tech",
      branch: rawProfileData.branch || rawProfileData.education?.branch || "Computer Science & Engineering",
      graduationYear: rawProfileData.graduationYear || rawProfileData.education?.graduationYear || "2027",
      currentYear: rawProfileData.year || rawProfileData.education?.currentYear || "Year 3",
      gpa: rawProfileData.gpa || rawProfileData.education?.gpa || "8.9",
      city: rawProfileData.city || rawProfileData.education?.city || "Bengaluru, India"
    },
    skills: Array.from(new Set([...(rawProfileData.skills || []), "Python", "Machine Learning", "SQL", "Git", "Data Structures", "Algorithms", "React"])),
    projects: rawProfileData.projects && rawProfileData.projects.length > 0 ? rawProfileData.projects : [
      {
        title: "Autonomous Agent & AI Career Navigator",
        description: "Built multimodal agentic system for matching student skills to verified internships.",
        tech: "Python, PyTorch, React, SQL"
      }
    ],
    certifications: rawProfileData.certifications || ["Google AI & Machine Learning Professional Certificate"],
    experience: rawProfileData.experience || [],
    socialLinks: {
      github: rawProfileData.github || rawProfileData.socialLinks?.github || "https://github.com/saiprakashneelavar",
      linkedin: rawProfileData.linkedin || rawProfileData.socialLinks?.linkedin || "https://linkedin.com/in/saiprakashneelavar",
      portfolio: rawProfileData.portfolio || rawProfileData.socialLinks?.portfolio || "https://saiprakash.dev"
    },
    resumeFile: rawProfileData.resumeFile || "Sai_Prakash_Resume_2026.pdf",
    resumeVerified: true,
    targetRoles: ["AI/ML Engineering Intern", "Software Developer Intern", "Full Stack AI Engineer"]
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

