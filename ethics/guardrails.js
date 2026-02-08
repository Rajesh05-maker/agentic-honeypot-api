exports.isSafe = (message) => {
  const blockedTerms = ["transfer money", "send otp", "real payment"];
  return !blockedTerms.some(term => message.toLowerCase().includes(term));
};
