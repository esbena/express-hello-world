const express = require("express");
const app = express();
const port = 3000;

function msg() {
  return "Hello World";
}
app.get("/", (req, res) => {
  res.send(msg());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
