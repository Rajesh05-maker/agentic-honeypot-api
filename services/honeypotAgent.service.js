exports.generateResponse = ({ upiFound, linkFound }) => {
  if (upiFound || linkFound) {
    return "I am checking the issue. Please give me a moment.";
  }
  return "Please explain the issue further.";
};
