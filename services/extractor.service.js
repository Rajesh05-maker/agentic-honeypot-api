exports.extractIntel = (message) => {
  const upiRegex = /\b[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}\b/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return {
    upi_ids: message.match(upiRegex) || [],
    bank_accounts: [],
    phishing_links: message.match(urlRegex) || []
  };
};
