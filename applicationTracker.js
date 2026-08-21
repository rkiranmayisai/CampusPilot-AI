// CampusPilot AI - Application Tracker & Metrics Engine

function calculateTrackerMetrics(opportunities = [], applicationHistory = []) {
  let paidCount = 0;
  let unpaidCount = 0;
  let highMatchCount = 0;

  opportunities.forEach(opp => {
    const type = opp.internshipType || "paid";
    if (type === "paid") paidCount++;
    else if (type === "unpaid") unpaidCount++;

    if ((opp.requiredSkills || []).length > 0) {
      highMatchCount++;
    }
  });

  const readyToApplyCount = opportunities.length;
  const submittedCount = applicationHistory.filter(app => app.status === "SUBMITTED" || app.status === "INTERVIEW" || app.status === "ACCEPTED").length;
  const interviewsCount = applicationHistory.filter(app => app.status === "INTERVIEW" || app.status === "ACCEPTED").length;

  return {
    paidCount,
    unpaidCount,
    highMatchCount,
    readyToApplyCount,
    submittedCount,
    interviewsCount
  };
}

function updateApplicationStatus(history, applicationId, newStatus) {
  return history.map(app => {
    if (app.applicationId === applicationId) {
      return { ...app, status: newStatus, lastUpdated: new Date().toLocaleTimeString() };
    }
    return app;
  });
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.calculateTrackerMetrics = calculateTrackerMetrics;
  window.CampusPilotServices.updateApplicationStatus = updateApplicationStatus;
}
