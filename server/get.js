const { app } = require("./index");
const root = () => {
  app.get("/", (req, res) => {
    res.send("Data");
  });
};

module.exports.root = root;
