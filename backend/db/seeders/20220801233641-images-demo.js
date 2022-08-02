'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        url: '',
        reviewId: 1,
        spotId: 1
      },
      {
        spotId: 2,
        reviewId: 2,
        stars: 5
      },
      {
        spotId: 3,
        reviewId: 3,
        url: ''

      }
    ], {})

  },
  async down (queryInterface, Sequelize) {
        const Op = Sequelize.Op
         return queryInterface.bulkDelete('Images', {
          userId: { [Op.in]: [1,2,3]},
          spotId: { [Op.in]: [1,2,3]}
        },
      {})
  }
}
