// CampusPilot AI - Internship Eligibility & Match Analysis Engine

function analyzeEligibilityAndMatch(studentProfile, opportunity) {
  const userSkills = (studentProfile.skills || []).map(s => s.trim().toLowerCase());
  const requiredSkills = opportunity.requiredSkills || [];

  const matchedSkills = [];
  const missingSkills = [];

  requiredSkills.forEach(req => {
    const reqLower = req.toLowerCase();
    const isMatch = userSkills.some(uSkill => 
      uSkill === reqLower || 
      reqLower.includes(uSkill) || 
      uSkill.includes(reqLower)
    );

    if (isMatch) {
      matchedSkills.push(req);
    } else {
      missingSkills.push(req);
    }
  });

  const skillRatio = requiredSkills.length > 0 ? (matchedSkills.length / requiredSkills.length) : 1;
  const rawScore = Math.round(skillRatio * 60 + 38);
  const matchScore = Math.min(98, Math.max(62, rawScore));

  let priorityTier = "MEDIUM PRIORITY";
  if (matchScore >= 85) {
    priorityTier = "HIGH PRIORITY";
  } else if (matchScore < 70) {
    priorityTier = "LOW PRIORITY";
  }

  const studentYear = studentProfile.education?.currentYear || studentProfile.year || "Year 3";
  const studentBranch = studentProfile.education?.branch || studentProfile.branch || "Computer Science";
  
  let isYearEligible = true;
  if (opportunity.targetYears && opportunity.targetYears.length > 0) {
    isYearEligible = opportunity.targetYears.includes(studentYear);
  }

  let isBranchEligible = true;
  if (opportunity.branches && opportunity.branches.length > 0) {
    isBranchEligible = opportunity.branches.some(b => 
      b.includes("All") || 
      b.toLowerCase().includes("cs") || 
      studentBranch.toLowerCase().includes(b.toLowerCase())
    );
  }

  let eligibilityStatus = "ELIGIBLE";
  let eligibilityReason = "All core academic criteria & skill match thresholds satisfied.";

  if (!isYearEligible || !isBranchEligible) {
    eligibilityStatus = "WARNING";
    eligibilityReason = `Year/Branch mismatch (${studentYear}, ${studentBranch}). Flexible application permitted.`;
  }

  if (matchScore < 60) {
    eligibilityStatus = "INELIGIBLE";
    eligibilityReason = "Skill gap too high for immediate auto-fill application.";
  }

  return {
    matchScore,
    priorityTier,
    eligibilityStatus,
    eligibilityReason,
    matchedSkills,
    missingSkills,
    skillCount: requiredSkills.length,
    matchedCount: matchedSkills.length
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.analyzeEligibilityAndMatch = analyzeEligibilityAndMatch;
}
