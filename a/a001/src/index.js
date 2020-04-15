const path = require("path");
const express = require("express");
const app = express();
const forcast = require("./utils/forcast");

// const publicPath = path.join(__dirname, "../public");

// app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.get("", (req, res) => {
  console.log("work");
  forcast((error, response) => {
    if (error) {
      return res.send({
        error: "address is invaild",
      });
    }
    res.send({
      name: req.query.address,
      temperture: response,
    });
  });
  // res.send("hey");
});

app.listen(port, () => console.log(`listening${port}`));
