const userCtrl = require("../controllers/users");
const express = require("express");
const users = express.Router();

users.get("/:id", userCtrl.getOne);
users.post("/", userCtrl.postOne);
users.post("/login", userCtrl.login);
users.post("/fav", userCtrl.addFav);
users.get("/fav/list", userCtrl.getFav);
users.delete("/fav/list/:city", userCtrl.deleteOne);

module.exports = users;
