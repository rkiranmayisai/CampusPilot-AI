// CampusPilot AI - Company-Specific Course Recommender Service

const COMPANY_COURSES = {
  "Google": [
    { id: "c1", title: "Google Cloud Machine Learning Engineer Professional Certificate", platform: "Coursera", duration: "2 months", rating: 4.9, link: "https://coursera.org/google-cloud-ml", level: "Advanced", skillCovered: "TensorFlow & Vertex AI" },
    { id: "c2", title: "Advanced Machine Learning with TensorFlow on Google Cloud", platform: "Pluralsight", duration: "4 weeks", rating: 4.8, link: "https://pluralsight.com/courses/google-tf", level: "Intermediate", skillCovered: "TensorFlow 2.x" },
    { id: "c3", title: "Google Gemini API Masterclass & LLM Fine-Tuning", platform: "YouTube / DeepLearning.AI", duration: "10 hours", rating: 4.9, link: "https://deeplearning.ai/short-courses/gemini", level: "All Levels", skillCovered: "Gemini API & Prompting" }
  ],
  "Microsoft": [
    { id: "c4", title: "Microsoft Azure AI Engineer Associate (AI-102)", platform: "Microsoft Learn", duration: "6 weeks", rating: 4.8, link: "https://learn.microsoft.com/certifications/azure-ai-engineer", level: "Intermediate", skillCovered: "Azure OpenAI & Cognitive Services" },
    { id: "c5", title: "Modern C++ Programming & Distributed Systems", platform: "edX / Microsoft", duration: "5 weeks", rating: 4.7, link: "https://edx.org/microsoft-cpp", level: "Advanced", skillCovered: "C++17 & Concurrency" }
  ],
  "Amazon": [
    { id: "c6", title: "AWS Certified Machine Learning - Specialty", platform: "Udemy", duration: "8 weeks", rating: 4.9, link: "https://udemy.com/aws-machine-learning-specialty", level: "Advanced", skillCovered: "SageMaker & MLOps" },
    { id: "c7", title: "Amazon Distributed Systems & Microservices", platform: "Coursera", duration: "4 weeks", rating: 4.8, link: "https://coursera.org/aws-distributed", level: "Intermediate", skillCovered: "Java & System Design" }
  ],
  "Adobe": [
    { id: "c8", title: "Computer Vision & Image Processing Specialization", platform: "Coursera / Stanford", duration: "3 months", rating: 4.9, link: "https://coursera.org/stanford-computer-vision", level: "Advanced", skillCovered: "OpenCV & PyTorch Vision" }
  ]
};

function getCoursesForCompany(companyName = "Google") {
  const compKey = Object.keys(COMPANY_COURSES).find(c => c.toLowerCase() === companyName.toLowerCase()) || "Google";
  return COMPANY_COURSES[compKey] || COMPANY_COURSES["Google"];
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.COMPANY_COURSES = COMPANY_COURSES;
  window.CampusPilotServices.getCoursesForCompany = getCoursesForCompany;
}

