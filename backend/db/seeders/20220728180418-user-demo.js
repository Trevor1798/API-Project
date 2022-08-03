'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {  username: 'Bezos1',
        firstName: 'Jeff',
        lastName: 'Bezos',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      { username: 'Musk1',
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'user1@user.io',
        hashedPassword: bcrypt.hashSync('password2')
      },
      { username: 'Gates1',
        firstName:'Bill',
        lastName: 'Gates',
        email: 'user2@user.io',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
