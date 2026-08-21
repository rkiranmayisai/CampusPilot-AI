// CampusPilot AI - Multi-Dimensional Opportunity Match Scoring Engine

function calculateOpportunityMatch(student, opportunity) {
  const studentSkillsLower = student.skills.map(s => s.trim().toLowerCase());
  const oppSkills = opportunity.requiredSkills || [];

  // 1. Skills Match Score Calculation
  let matchedSkills = [];
  let missingSkills = [];

  oppSkills.forEach(reqSkill => {
    const isMatched = studentSkillsLower.some(userSkill => 
      userSkill === reqSkill.toLowerCase() || 
      reqSkill.toLowerCase().includes(userSkill) || 
      userSkill.includes(reqSkill.toLowerCase())
    );
    if (isMatched) {
      matchedSkills.push(reqSkill);
    } else {
      missingSkills.push(reqSkill);
    }
  });

  const skillsMatchPercent = oppSkills.length > 0 
    ? Math.round((matchedSkills.length / oppSkills.length) * 100)
    : 100;

  // 2. Academic & Year Eligibility Check
  let isYearEligible = opportunity.targetYears ? opportunity.targetYears.includes(student.year) : true;
  let isDegreeEligible = opportunity.degreeEligible 
    ? opportunity.degreeEligible.some(d => d.toLowerCase().includes(student.degree.toLowerCase()) || d === "All Degrees") 
    : true;
  let isGpaEligible = student.gpa ? student.gpa >= (opportunity.minGpa || 0) : true;

  let eligibilityScore = 100;
  if (!isYearEligible) eligibilityScore -= 35;
  if (!isDegreeEligible) eligibilityScore -= 35;
  if (!isGpaEligible) eligibilityScore -= 30;
  eligibilityScore = Math.max(0, eligibilityScore);

  // 3. Interest & Career Goal Match
  const studentInterestsLower = (student.interests || []).map(i => i.toLowerCase());
  const targetRoleLower = (student.targetRole || "").toLowerCase();

  let interestMatchPercent = 70; // baseline
  const titleLower = opportunity.title.toLowerCase();
  const descLower = opportunity.description.toLowerCase();

  const matchesTargetRole = targetRoleLower && (titleLower.includes(targetRoleLower) || descLower.includes(targetRoleLower));
  const matchesInterestTag = studentInterestsLower.some(tag => titleLower.includes(tag) || descLower.includes(tag));

  if (matchesTargetRole) interestMatchPercent += 20;
  if (matchesInterestTag) interestMatchPercent += 10;
  interestMatchPercent = Math.min(100, interestMatchPercent);

  // 4. Overall Weighted Score
  // Weights: Skills (50%), Eligibility (30%), Interest (20%)
  const overallMatchScore = Math.round(
    (skillsMatchPercent * 0.50) + (eligibilityScore * 0.30) + (interestMatchPercent * 0.20)
  );

  // 5. Generate AI Explanation Rationale
  let rationaleParts = [];
  if (skillsMatchPercent >= 80) {
    rationaleParts.push(`Your technical stack (${matchedSkills.slice(0, 3).join(", ")}) closely aligns with ${opportunity.company}'s requirements.`);
  } else if (matchedSkills.length > 0) {
    rationaleParts.push(`You match ${matchedSkills.length} of ${oppSkills.length} required skills (${matchedSkills.join(", ")}).`);
  } else {
    rationaleParts.push(`Requires upskilling in key frameworks like ${missingSkills.slice(0, 2).join(" & ")}.`);
  }

  if (eligibilityScore === 100) {
    rationaleParts.push(`Your academic profile (${student.degree}, ${student.year}) meets 100% of eligibility criteria.`);
  } else if (!isYearEligible) {
    rationaleParts.push(`Targeted primarily for ${opportunity.targetYears ? opportunity.targetYears.join(" & ") : "other years"}.`);
  }

  if (missingSkills.length > 0) {
    rationaleParts.push(`Recommended skill gap to bridge: ${missingSkills[0]}.`);
  } else {
    rationaleParts.push(`⭐ You are fully qualified for immediate application!`);
  }

  return {
    overallMatchScore,
    skillsMatchPercent,
    eligibilityScore,
    interestMatchPercent,
    matchedSkills,
    missingSkills,
    isEligible: eligibilityScore >= 70,
    explanation: rationaleParts.join(" ")
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.calculateOpportunityMatch = calculateOpportunityMatch;
}

