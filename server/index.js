const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8888;

// ZingMp3Router
const ZingMp3Router = require("./routers/api/ZingRouter");
app.use("/api", ZingMp3Router);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
