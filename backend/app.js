// const express = require("express");
// const app = express();
// const ErrorHandler = require("./middleware/error");



// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//       path: "backend/config/.env",
//     });
// };

// // it's for ErrorHandling
// app.use(ErrorHandler);

// module.exports = app;

const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}

// Test Route
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "API is working!" });
});

// Middleware for error handling
app.use(ErrorHandler);

module.exports = app;
