'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Bookings', [
          {
            userId: 1,
            spotId: 1,
            startDate: new Date('2022-07-01'),
            endDate: new Date('2022-07-05')
          },
          {
            userId: 1,
            spotId: 1,
            startDate: new Date('2022-09-01'),
            endDate: new Date('2022-09-05')
          },
          {
            userId: 1,
            spotId: 1,
            startDate: new Date('2022-08-01'),
            endDate: new Date('2022-08-05')


          }

      ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
      return queryInterface.bulkDelete('Bookings', {
          startDate: {[Op.in]: [new Date('2022-07-01'), new Date('2022-09-05')]}
      })
  }
};
