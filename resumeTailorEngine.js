// CampusPilot AI - Smart Resume & Profile Tailoring Engine

function tailorResumeForOpportunity(studentProfile, opportunity, analysisResults = {}) {
  const matchedSkills = analysisResults.matchedSkills || [];
  const missingSkills = analysisResults.missingSkills || [];
  const allStudentSkills = studentProfile.skills || [];

  const remainingSkills = allStudentSkills.filter(s => 
    !matchedSkills.some(m => m.toLowerCase() === s.toLowerCase())
  );
  const tailoredSkillList = [...matchedSkills, ...remainingSkills];

  const studentProjects = studentProfile.projects || [];
  const relevantProjects = studentProjects.map(proj => {
    const projTech = proj.techStack || [];
    const isRelevant = projTech.some(t => 
      matchedSkills.some(m => m.toLowerCase() === t.toLowerCase())
    );

    return {
      ...proj,
      highlightBadge: isRelevant ? "🎯 Direct Tech Match" : "⚡ Core Engineering"
    };
  });

  const degree = studentProfile.education?.degree || studentProfile.degree || "B.Tech";
  const branch = studentProfile.education?.branch || studentProfile.branch || "Computer Science";
  const gradYear = studentProfile.education?.graduationYear || "2027";
  const name = studentProfile.fullName || studentProfile.name || "Student Candidate";

  const topSkillsText = matchedSkills.slice(0, 4).join(", ") || "software engineering concepts";
  const company = opportunity.company || "Target Company";
  const title = opportunity.title || "Internship Role";

  const tailoredSummary = `${degree} candidate in ${branch} (Graduating ${gradYear}) with strong hands-on proficiency in ${topSkillsText}. Eager to contribute to ${company}'s ${title} position by applying software design principles, problem-solving, and clean code practices.`;

  return {
    tailoredSkillList,
    relevantProjects,
    tailoredSummary,
    highlightedMatchedSkills: matchedSkills,
    missingSkillsWarning: missingSkills
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.tailorResumeForOpportunity = tailorResumeForOpportunity;
}
