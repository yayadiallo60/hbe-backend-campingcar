const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.all("*", (req, res) => {
//   res.status(404).json({ message: "Page not Found" });
// });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
