// CampusPilot AI - Paid & Unpaid Internship Filter Engine

function filterOpportunities(opportunities, preferences = {}) {
  const {
    includePaid = true,
    includeUnpaid = true,
    includeUndisclosed = true,
    minStipend = 0,
    priorityOrder = "paid_first",
    searchTerm = ""
  } = preferences;

  let filtered = opportunities.filter(opp => {
    const type = opp.internshipType || "paid";
    if (type === "paid" && !includePaid) return false;
    if (type === "unpaid" && !includeUnpaid) return false;
    if (type === "undisclosed" && !includeUndisclosed) return false;

    if (type === "paid" && minStipend > 0) {
      const amount = opp.stipendAmount || 0;
      if (amount < minStipend) return false;
    }

    if (searchTerm && searchTerm.trim().length > 0) {
      const query = searchTerm.toLowerCase().trim();
      const titleMatch = (opp.title || "").toLowerCase().includes(query);
      const companyMatch = (opp.company || "").toLowerCase().includes(query);
      const skillMatch = (opp.requiredSkills || []).some(s => s.toLowerCase().includes(query));
      if (!titleMatch && !companyMatch && !skillMatch) return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (priorityOrder === "paid_first") {
      const priorityMap = { paid: 3, undisclosed: 2, unpaid: 1 };
      const scoreA = priorityMap[a.internshipType || "paid"] || 0;
      const scoreB = priorityMap[b.internshipType || "paid"] || 0;
      if (scoreA !== scoreB) return scoreB - scoreA;
      return (b.stipendAmount || 0) - (a.stipendAmount || 0);
    }
    return 0;
  });

  return filtered;
}

function computeFilterMetrics(opportunities) {
  let paidCount = 0;
  let unpaidCount = 0;
  let undisclosedCount = 0;

  opportunities.forEach(opp => {
    const type = opp.internshipType || "paid";
    if (type === "paid") paidCount++;
    else if (type === "unpaid") unpaidCount++;
    else undisclosedCount++;
  });

  return { paidCount, unpaidCount, undisclosedCount, totalCount: opportunities.length };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.filterOpportunities = filterOpportunities;
  window.CampusPilotServices.computeFilterMetrics = computeFilterMetrics;
}
