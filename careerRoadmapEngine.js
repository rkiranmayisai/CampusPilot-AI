// CampusPilot AI - Dynamic Personal Career Roadmap Engine

function generateCareerRoadmap(studentProfile) {
  const targetRole = studentProfile.targetRole || "AI / Software Developer";
  const userSkills = studentProfile.skills || [];

  const roadmapMilestones = [
    {
      id: "m-year1",
      yearTitle: "YEAR 1: Core Computer Science Foundations",
      status: studentProfile.year === "Year 1" ? "active" : "completed",
      nodes: [
        { id: "n1-1", title: "Master C / C++ & Data Structures", status: userSkills.some(s => ["C", "C++", "Data Structures"].includes(s)) ? "completed" : "in_progress", desc: "Arrays, Linked Lists, Trees, Graphs, Sorting & Searching." },
        { id: "n1-2", title: "Build 2 Core Projects in Python / JS", status: userSkills.includes("Python") ? "completed" : "in_progress", desc: "CLI tools, web scrapers, or foundational utility tools on GitHub." },
        { id: "n1-3", title: "Open Source & GitHub Basics", status: "completed", desc: "Git workflow, branching, commits, and initial repository READMEs." }
      ]
    },
    {
      id: "m-year2",
      yearTitle: "YEAR 2: Specialization & Domain Mastery",
      status: studentProfile.year === "Year 2" ? "active" : (studentProfile.year === "Year 3" || studentProfile.year === "Year 4" ? "completed" : "upcoming"),
      nodes: [
        { id: "n2-1", title: "AI/ML Frameworks & Mathematical Foundations", status: userSkills.some(s => ["Machine Learning", "TensorFlow", "PyTorch"].includes(s)) ? "completed" : "in_progress", desc: "Linear Algebra, Statistics, Scikit-Learn, PyTorch / TensorFlow." },
        { id: "n2-2", title: "Participate in 2 National Hackathons", status: "in_progress", desc: "ETHIndia, Smart India Hackathon, or Devfolio Hackathons." },
        { id: "n2-3", title: "Database Systems & SQL Optimization", status: userSkills.includes("SQL") ? "completed" : "in_progress", desc: "Relational modeling, indexing, transactions, and join performance." }
      ]
    },
    {
      id: "m-year3",
      yearTitle: "YEAR 3: High-Impact Internships & System Design",
      status: studentProfile.year === "Year 3" ? "active" : (studentProfile.year === "Year 4" ? "completed" : "upcoming"),
      nodes: [
        { id: "n3-1", title: "Target Summer Internship Applications", status: "in_progress", desc: "Google AI Internship, Microsoft SWE, or Adobe Research." },
        { id: "n3-2", title: "LeetCode & Competitive Coding (Rating 1600+)", status: "in_progress", desc: "Daily problem solving in Graphs, DP, Dynamic Sliding Window." },
        { id: "n3-3", title: "System Design & Distributed Architecture", status: "upcoming", desc: "Scalability, load balancing, caching, rate limiting, and REST APIs." }
      ]
    },
    {
      id: "m-year4",
      yearTitle: "YEAR 4: Placement Preparation & Dream Company Offer",
      status: studentProfile.year === "Year 4" ? "active" : "upcoming",
      nodes: [
        { id: "n4-1", title: "ATS Resume Polish & Portfolio Audit", status: "upcoming", desc: "Achieve ATS score > 85/100 and GitHub Dev Profile Score > 80." },
        { id: "n4-2", title: "AI Mock Interviews (Tech + HR)", status: "upcoming", desc: "Complete 5+ simulated mock interviews with granular feedback." },
        { id: "n4-3", title: "Offer Negotiation & Onboarding", status: "upcoming", desc: "Secure dream role in AI / Software Engineering." }
      ]
    }
  ];

  // Calculate Overall Progress Percentage
  let totalNodes = 0;
  let completedNodes = 0;
  roadmapMilestones.forEach(m => {
    m.nodes.forEach(n => {
      totalNodes++;
      if (n.status === "completed") completedNodes++;
    });
  });

  const progressPercent = Math.round((completedNodes / totalNodes) * 100);

  return {
    targetRole,
    progressPercent,
    completedNodes,
    totalNodes,
    milestones: roadmapMilestones
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.generateCareerRoadmap = generateCareerRoadmap;
}

