'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
return queryInterface.bulkInsert('Reviews', [
  {
    userId: 1,
    spotId: 1,
    review: '',
    stars: 4
  },
  {
    userId: 2,
    spotId: 2,
    review: '',
    stars: 5
  },
  {
    userId: 3,
    spotId: 3,
    review: '',
    stars: 2
  }
], {})

},
async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
     return queryInterface.bulkDelete('Reviews', {
      userId: { [Op.in]: [1,2,3]},
      spotId: { [Op.in]: [1,2,3]}
    },
  {})
}
}
