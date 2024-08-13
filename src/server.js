const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 1000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
