const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

app.use("/api", require("./routes/honeypot.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Honeypot API running on port ${PORT}`);
});
