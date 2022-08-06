'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Bookings', [
          {
            spotId: 1,
            userId: 1,
            startDate: new Date('2023-07-01'),
            endDate: new Date('2023-07-05')
          },
          {
            spotId: 2,
            userId: 2,
            startDate: new Date('2023-09-01'),
            endDate: new Date('2023-09-05')
          },
          {
            spotId: 3,
            userId: 3,
            startDate: new Date('2023-08-01'),
            endDate: new Date('2023-08-05')


          }

      ], {})
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Bookings', null, {})
  }
}
