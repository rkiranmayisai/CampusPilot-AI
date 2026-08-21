// CampusPilot AI - WhatsApp & Telegram Deadline Reminder Service

let REMINDER_SETTINGS = {
  phone: "+91 98765 43210",
  telegramHandle: "@saiprakash_dev",
  notifyWhatsApp: true,
  notifyTelegram: true,
  alertThresholdHours: 48
};

function toggleReminderChannel(channel) {
  if (channel === 'whatsapp') REMINDER_SETTINGS.notifyWhatsApp = !REMINDER_SETTINGS.notifyWhatsApp;
  if (channel === 'telegram') REMINDER_SETTINGS.notifyTelegram = !REMINDER_SETTINGS.notifyTelegram;
  return REMINDER_SETTINGS;
}

function generateSampleAlertMessage(oppTitle = "Google AI Internship", deadlineDays = 8, matchScore = 94) {
  return `🔥 *CAMPUSPILOT AI DEADLINE ALERT* 🔥\n\n📌 Opportunity: *${oppTitle}*\n🎯 Match Score: *${matchScore}% Fit*\n⏳ Deadline Approaching: *${deadlineDays} Days Remaining*\n\n👉 *Why Apply:* Your Python & AI skills match 96%. Bridge TensorFlow gap with your 7-day action plan!\n\nLink to apply: https://campuspilot.ai/apply/${oppTitle.toLowerCase().replace(/\s+/g, '-')}`;
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.REMINDER_SETTINGS = REMINDER_SETTINGS;
  window.CampusPilotServices.toggleReminderChannel = toggleReminderChannel;
  window.CampusPilotServices.generateSampleAlertMessage = generateSampleAlertMessage;
}

