const { detectScam } = require("../services/scamDetector.service");
const { extractIntel } = require("../services/extractor.service");
const { generateResponse } = require("../services/honeypotAgent.service");
const { isSafe } = require("../ethics/guardrails");

exports.analyzeMessage = (req, res) => {
  console.log("Controller reached");

  const { sender_message } = req.body;


  if (!sender_message || typeof sender_message !== "string") {
    return res.status(400).json({
      error: "Invalid input. sender_message is required."
    });
  }

  const scamResult = detectScam(sender_message);

  if (!scamResult.isScam) {
    return res.json({
      scam_detected: false,
      message: "No scam patterns detected"
    });
  }


  if (!isSafe(sender_message)) {
    return res.json({
      scam_detected: true,
      blocked: true,
      reason: "Ethical guardrails triggered"
    });
  }


  const intel = extractIntel(sender_message);


  const agentReply = generateResponse({
    upiFound: intel.upi_ids.length > 0,
    linkFound: intel.phishing_links.length > 0
  });


  return res.json({
    scam_detected: true,
    scam_type: scamResult.scamType,
    confidence_score: scamResult.confidence,
    agent_action: "engaged",
    agent_response: agentReply,
    extracted_intelligence: intel,
    ethical_guardrails: {
      real_transaction: false,
      simulation_mode: true
    }
  });
};
