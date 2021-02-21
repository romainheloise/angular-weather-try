const mysql = require("../config/mysql");

class Users {
  static getOne = async (id) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    const [result] = await mysql.query(sql, id);
    return result;
  };

  static postOne = async (body) => {
    const sql = "INSERT INTO users SET ? ";
    const [result] = await mysql.query(sql, body);
    return result.insertId;
  };

  static getAll = async () => {
    const sql = "SELECT * FROM users";
    const [result] = await mysql.query(sql);
    return result;
  };

  static addFav = async (user, city) => {
    const sql = "INSERT INTO favorites SET ?";
    const [result] = await mysql.query(sql, { city: city, users_id: user });
    return result.insertId;
  };

  static getFav = async (userId) => {
    const sql = "SELECT * FROM favorites WHERE users_id = ?";
    const [result] = await mysql.query(sql, userId);
    return result;
  };

  static deleteOne = async (userId, cityId) => {
    const sql = "DELETE FROM favorites WHERE users_id = ? AND city = ?";
    const [result] = await mysql.query(sql, [userId, cityId]);

    return result;
  };
}

module.exports = Users;
