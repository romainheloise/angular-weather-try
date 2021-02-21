const model = require("../models/users");
const jwt = require("jsonwebtoken");

class Users {
  static getOne = async (req, res) => {
    const { id } = req.params;
    const user = await model.getOne(id);
    res.status(200).json(user);
  };

  static postOne = async (req, res) => {
    const tryNew = {
      username: req.body.username,
      password: req.body.password,
    };

    const missingFields = {};
    for (const key in tryNew) {
      if (!req.body[key]) {
        missingFields[key] = "Merci de remplir " + [key];
      }
    }

    if (Object.keys(missingFields).length > 0) {
      res.status(400).json(missingFields);
      return;
    }

    const postUser = await model.postOne(req.body);
    const newUser = await model.getOne(postUser);
    res.status(200).json(newUser);
  };

  static login = async (req, res, next) => {
    const tryNew = {
      username: req.body.username,
      password: req.body.password,
    };

    const missingFields = {};
    for (const key in tryNew) {
      if (!req.body[key]) {
        missingFields[key] = "Merci de remplir " + [key];
      }
    }

    if (Object.keys(missingFields).length > 0) {
      res.status(400).json(missingFields);
      return;
    }

    const users = await model.getAll();
    const { username, password } = req.body;

    const selectedUser = users.filter((usr) => {
      const checkUsername = usr.username === username;
      const checkPassword = usr.password === password;
      if (checkPassword && checkUsername) return usr;
    });

    if (selectedUser.length === 0) {
      res.status(400).json("Login ou mot de passe incorrect");
      return;
    }

    const token = jwt.sign({ id: selectedUser[0].id }, "plop");
    res.status(200).json({ accesToken: token });
  };

  static addFav = async (req, res) => {
    const { user, city } = req.body;
    const certifiedUser = jwt.verify(user, "plop");
    const newFav = await model.addFav(certifiedUser.id, city);
    res.status(200).json(newFav);
  };

  static getFav = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "plop");
    const favList = await model.getFav(user.id);
    res.status(200).json(favList);
  };

  static deleteOne = async (req, res) => {
    console.log("plop");
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "plop");
    const { city } = req.params;
    const deleteFav = await model.deleteOne(user.id, city);
    res.sendStatus(209);
  };
}

module.exports = Users;
