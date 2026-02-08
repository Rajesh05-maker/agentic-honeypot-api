module.exports = (req, res, next) => {
  console.log("Auth middleware reached");

  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  console.log("Auth passed");
  next();
};
