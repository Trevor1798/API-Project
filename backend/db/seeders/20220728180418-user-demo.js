'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
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
      },
      { username: 'JohnBro1',
      firstName: 'John',
      lastName: 'Bro',
      email: 'user4@user.io',
      hashedPassword: bcrypt.hashSync('password2')
    },
    { username: 'LebronDaGoat',
    firstName: 'Lebron',
    lastName: 'James',
    email: 'lebron@user.io',
    hashedPassword: bcrypt.hashSync('password2')
  },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
