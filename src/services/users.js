const Users = require('../models/user');
const hashPassword = require('../bcrypt/bcrypt');

const userServices = {
  
  create: async ( body ) => {
    try {
      const { name, email, password, role } = body;
      const newPassword = await hashPassword(password);
      const userSaved = await Users.create({ name, email, password: newPassword, role })
      return userSaved;
      
    } catch (error) {
      return error
    }
  },
  findUsers: async () => {
    const users = await Users.find();
    users.sort(function (a, b) {
      return a.id - b.id;
    });
    return users;
  },
  findById: async (id) => {
    try {
      const user = await Users.findById(id);
      return user;
    } catch (error) {
      return error;
    }
  }
}

module.exports = userServices