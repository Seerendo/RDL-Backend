const db = require("../models/index");
const User = db["user"];

const logInOut = (req, res) => {
  const { body } = req;
  try {
    const user = User.findOne(body.userId);
    if (!user) {
      res.status(404).send("El usuario no existe");
    } else {
      
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logInOut };
