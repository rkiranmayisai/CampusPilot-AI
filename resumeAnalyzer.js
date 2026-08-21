// CampusPilot AI - AI Resume Analyzer & ATS Optimizer Engine

function analyzeResume(resumeText, studentProfile) {
  if (!resumeText || resumeText.trim().length < 30) {
    return {
      atsScore: 45,
      skillMatchScore: 40,
      impactScore: 50,
      formatScore: 45,
      foundKeywords: ["Python", "HTML", "C++"],
      missingKeywords: ["TensorFlow", "SQL", "Docker", "REST API", "Git"],
      weakBullets: [
        "Worked on a python project for college.",
        "Responsible for handling database."
      ],
      recommendations: [
        { section: "Technical Skills", suggestion: "Add Python + TensorFlow to your technical skills section." },
        { section: "Projects", suggestion: "Quantify project impact! (e.g. 'Improved inference speed by 35% using PyTorch quantization')." },
        { section: "ATS Formatting", suggestion: "Avoid multi-column tables or graphics; use standard bold section headers." }
      ],
      rewrittenBullets: [
        { original: "Worked on a python project for college.", improved: "Developed an end-to-end Python AI classifier using Scikit-Learn, achieving 94.2% test accuracy on 10,000+ samples." },
        { original: "Responsible for handling database.", improved: "Architected optimized SQL schema with indexed queries, reducing API response latencies by 42%." }
      ]
    };
  }

  const textLower = resumeText.toLowerCase();

  // Keyword Matching
  const targetKeywords = [
    "python", "c++", "java", "sql", "machine learning", "tensorflow", "pytorch",
    "react", "node.js", "data structures", "algorithms", "rest api", "git",
    "docker", "system design", "aws", "cloud", "agile", "unit testing"
  ];

  const foundKeywords = targetKeywords.filter(kw => textLower.includes(kw));
  const missingKeywords = targetKeywords.filter(kw => !textLower.includes(kw)).slice(0, 5);

  // ATS Metric Scoring
  const keywordDensityScore = Math.min(100, Math.round((foundKeywords.length / 10) * 100));

  // Impact Quantification Check (numbers, percentages, metrics)
  const hasNumbers = (resumeText.match(/\d+%/g) || []).length + (resumeText.match(/\d+/g) || []).length;
  const impactScore = Math.min(100, Math.max(40, hasNumbers * 12));

  // Word Count & Length Check
  const wordCount = resumeText.trim().split(/\s+/).length;
  const lengthScore = wordCount >= 150 && wordCount <= 700 ? 95 : (wordCount < 150 ? 55 : 75);

  const atsScore = Math.round((keywordDensityScore * 0.45) + (impactScore * 0.35) + (lengthScore * 0.20));

  // Generate Bullet Suggestions
  const weakBullets = [];
  const rewrittenBullets = [];

  const lines = resumeText.split('\n').map(l => l.trim()).filter(l => l.length > 15);
  lines.forEach(line => {
    if ((line.toLowerCase().startsWith('worked') || line.toLowerCase().startsWith('responsible') || line.toLowerCase().startsWith('helped')) && !line.match(/\d+/)) {
      weakBullets.push(line);
      rewrittenBullets.push({
        original: line,
        improved: `Spearheaded ${line.replace(/^(worked on|responsible for|helped with)/i, '').trim()}, delivering a 28% efficiency increase and integrating robust unit tests.`
      });
    }
  });

  if (weakBullets.length === 0) {
    weakBullets.push("Responsible for maintaining application code.");
    rewrittenBullets.push({
      original: "Responsible for maintaining application code.",
      improved: "Engineered scalable REST microservices, maintaining 99.9% uptime and reducing latency by 30ms."
    });
  }

  const recommendations = [
    { section: "Keywords", suggestion: `Add missing key industry terms: ${missingKeywords.map(k => k.toUpperCase()).join(", ")}.` },
    { section: "Project Impact", suggestion: hasNumbers < 3 ? "Include quantitative metrics (%, ms latency, user count) in project bullet points." : "Great job including numerical metrics!" },
    { section: "Header Alignment", suggestion: "Ensure clean, standard headers: 'TECHNICAL SKILLS', 'PROJECTS', 'EDUCATION', 'EXPERIENCE'." }
  ];

  return {
    atsScore,
    skillMatchScore: keywordDensityScore,
    impactScore,
    formatScore: lengthScore,
    foundKeywords: foundKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)),
    missingKeywords: missingKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)),
    weakBullets: weakBullets.slice(0, 3),
    recommendations,
    rewrittenBullets: rewrittenBullets.slice(0, 3)
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.analyzeResume = analyzeResume;
}

