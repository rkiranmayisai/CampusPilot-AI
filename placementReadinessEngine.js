// CampusPilot AI - Unified Placement Readiness Score Engine

function calculatePlacementReadiness(studentProfile = {}, resumeAnalysis = null, githubAnalysis = null, mockInterviewScore = 78) {
  // 1. DSA & Skills Score (out of 100)
  const skills = (studentProfile && studentProfile.skills) ? studentProfile.skills : [];
  const skillCount = skills.length > 0 ? skills.length : 5;
  const dsaScore = Math.min(100, Math.max(50, skillCount * 12));

  // 2. GitHub Score
  const ghScore = githubAnalysis ? githubAnalysis.devProfileScore : 82;

  // 3. ATS Resume Score
  const resumeScore = resumeAnalysis ? resumeAnalysis.atsScore : 80;

  // 4. Mock Interview Score
  const interviewScore = mockInterviewScore;

  // Overall Weighted Score
  const readinessScore = Math.round(
    (dsaScore * 0.25) + (ghScore * 0.25) + (resumeScore * 0.25) + (interviewScore * 0.25)
  );

  let readinessTier = "High Growth Tech Ready 🚀";
  let tierColor = "text-indigo-400";
  if (readinessScore >= 85) {
    readinessTier = "FAANG & Tier-1 Dream Role Ready 🏆";
    tierColor = "text-emerald-400";
  } else if (readinessScore < 70) {
    readinessTier = "Building Momentum & Core Skills 📈";
    tierColor = "text-amber-400";
  }

  const actionChecklist = [
    { title: "Target ATS Resume Score > 85", current: `${resumeScore}/100`, status: resumeScore >= 85 ? "done" : "action" },
    { title: "GitHub Commit Streak > 14 Days", current: `${githubAnalysis ? githubAnalysis.commitStreakDays : 19} Days`, status: "done" },
    { title: "Complete 3 AI Mock Interviews", current: "2 Completed", status: "action" },
    { title: "Bridge Missing Skill: TensorFlow", current: "In Progress (Day 3)", status: "action" }
  ];

  return {
    readinessScore,
    readinessTier,
    tierColor,
    breakdown: {
      dsaScore,
      ghScore,
      resumeScore,
      interviewScore
    },
    actionChecklist
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.calculatePlacementReadiness = calculatePlacementReadiness;
}

