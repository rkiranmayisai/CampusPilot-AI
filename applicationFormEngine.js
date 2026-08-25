// CampusPilot AI - Intelligent Application Form Auto-Fill & Answer Generation Engine

function generateApplicationForm(studentProfile = {}, opportunity = {}, tailoredData = {}) {
  const profile = studentProfile || {};
  const edu = profile.education || {};
  const social = profile.socialLinks || {};

  const formFields = {
    fullName: profile.fullName || profile.name || "",
    email: profile.email || "",
    phone: profile.phone || "",
    institution: edu.institution || profile.institution || "National Institute of Technology",
    degree: edu.degree || profile.degree || "B.Tech",
    branch: edu.branch || profile.branch || "Computer Science",
    graduationYear: edu.graduationYear || profile.graduationYear || "2027",
    gpa: edu.gpa || profile.gpa || "8.8 / 10.0",
    city: edu.city || profile.city || "Hyderabad",
    githubUrl: social.github || "",
    linkedinUrl: social.linkedin || "",
    portfolioUrl: social.portfolio || "",
    resumeFileName: profile.resumeFile || "Alex_Chen_Resume_2026.pdf",
    coverSummary: (tailoredData && tailoredData.tailoredSummary) || ""
  };

  const questions = opportunity.applicationQuestions || [
    `Why are you interested in applying for the ${opportunity.title} role at ${opportunity.company}?`,
    `How do your skills match the required technical stack for this internship?`
  ];

  const generatedAnswers = questions.map((q, idx) => {
    let answerText = "";
    const matchedSkills = tailoredData.highlightedMatchedSkills || opportunity.requiredSkills || [];

    if (idx === 0) {
      answerText = `I am deeply inspired by ${opportunity.company}'s engineering work. As a ${formFields.degree} student in ${formFields.branch}, I have built projects focusing on ${matchedSkills.slice(0, 3).join(", ")}, which directly aligns with the objectives of the ${opportunity.title} position.`;
    } else {
      answerText = `My core technical toolkit includes ${matchedSkills.join(", ")}, along with practical project experience in building scalable web and software applications. I excel at problem-solving, rapid prototyping, and writing clean, maintainable code.`;
    }

    return {
      questionId: `q-${idx}`,
      promptText: q,
      generatedAnswer: answerText
    };
  });

  return {
    formFields,
    generatedAnswers,
    isComplete: Boolean(formFields.fullName && formFields.email && formFields.degree)
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.generateApplicationForm = generateApplicationForm;
}
