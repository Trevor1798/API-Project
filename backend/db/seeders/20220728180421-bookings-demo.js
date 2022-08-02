'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Bookings', [
          {
            spotId: 1,
            userId: 1,
            startDate: '2023-07-01',
            endDate: '2023-07-05'
          },
          {
            spotId: 2,
            userId: 2,
            startDate: '2023-09-01',
            endDate: '2023-09-05'
          },
          {
            spotId: 3,
            userId: 3,
            startDate: '2023-08-01',
            endDate: '2023-08-05'


          }

      ], {})
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Bookings', null, {})
  }
}
