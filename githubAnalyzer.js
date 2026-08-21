// CampusPilot AI - GitHub Intelligence & Developer Profile Evaluator Engine

function analyzeGitHubProfile(username = "alex-dev-2026") {
  const cleanUser = username.trim() || "alex-dev-2026";

  // Simulated GitHub Portfolio Metrics
  const totalRepos = 14;
  const publicGists = 3;
  const totalStars = 48;
  const totalForks = 12;
  const commitStreakDays = 19;
  const languages = [
    { name: "Python", percentage: 42, color: "#3572A5" },
    { name: "C++", percentage: 28, color: "#f34b7d" },
    { name: "TypeScript / React", percentage: 18, color: "#3178c6" },
    { name: "SQL & Shell", percentage: 12, color: "#e34c26" }
  ];

  const featuredRepos = [
    {
      name: "smart-ai-resume-parser",
      description: "FastAPI + PyTorch service converting unstructured PDF resumes into structured JSON schema with 96% field extraction accuracy.",
      stars: 26,
      forks: 7,
      language: "Python",
      hasReadme: true,
      hasTests: true,
      qualityScore: 92
    },
    {
      name: "distributed-key-value-store",
      description: "C++17 in-memory cache supporting LRU eviction and thread-safe concurrent reads using mutex locks.",
      stars: 15,
      forks: 4,
      language: "C++",
      hasReadme: true,
      hasTests: false,
      qualityScore: 84
    },
    {
      name: "campus-event-finder-app",
      description: "React Native + Firebase cross-platform mobile application for college tech fest registrations.",
      stars: 7,
      forks: 1,
      language: "TypeScript",
      hasReadme: false,
      hasTests: false,
      qualityScore: 68
    }
  ];

  // Developer Profile Score Calculation out of 100
  // Metrics: Repo Quality (40%), Contribution Consistency (30%), Language Diversity (15%), README/Documentation (15%)
  const repoQualityAvg = Math.round(featuredRepos.reduce((acc, r) => acc + r.qualityScore, 0) / featuredRepos.length);
  const consistencyScore = Math.min(100, Math.round((commitStreakDays / 30) * 100));
  const docScore = Math.round((featuredRepos.filter(r => r.hasReadme).length / featuredRepos.length) * 100);

  const devProfileScore = Math.round(
    (repoQualityAvg * 0.40) + (consistencyScore * 0.30) + (85 * 0.15) + (docScore * 0.15)
  );

  const keyStrengths = [
    `Strong Python & C++ codebase footprint with ${totalStars} combined repository stars.`,
    `Active contribution velocity with a ${commitStreakDays}-day consecutive commit streak.`,
    `Good test coverage on primary machine learning repositories.`
  ];

  const portfolioFixes = [
    `Add clean README.md with screenshots & live demo link to 'campus-event-finder-app'.`,
    `Add unit test suite (GoogleTest/Catch2) to 'distributed-key-value-store'.`,
    `Pin top 3 repositories on main GitHub profile banner for recruiter visibility.`
  ];

  return {
    username: cleanUser,
    devProfileScore,
    totalRepos,
    totalStars,
    totalForks,
    commitStreakDays,
    languages,
    featuredRepos,
    keyStrengths,
    portfolioFixes
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.analyzeGitHubProfile = analyzeGitHubProfile;
}

