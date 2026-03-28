const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "SkyForge API is running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime()
  });
});

app.get("/api/info", (req, res) => {
  res.status(200).json({
    appName: process.env.APP_NAME || "SkyForge API",
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/api/time", (req, res) => {
  res.status(200).json({
    serverTime: new Date().toISOString()
  });
});

module.exports = app;