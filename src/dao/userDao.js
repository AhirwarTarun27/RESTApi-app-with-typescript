const User = require("../model/userModel");

const addUser = async (userData) => {
  return User.create({
    title: userData.title,
    completed: userData.completed,
  });
};

module.exports = {
  addUser,
};
