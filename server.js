const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
