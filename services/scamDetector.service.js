exports.detectScam = (message) => {
  const scamKeywords = ["account blocked", "pay", "upi", "bank", "click", "verify"];
  const found = scamKeywords.some(k => message.toLowerCase().includes(k));

  return {
    isScam: found,
    scamType: "Phishing / Social Engineering",
    confidence: found ? 0.9 : 0.1
  };
};
