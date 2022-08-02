'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Reviews', [
  {
    userId: 1,
    spotId: 1,
    review: 'I felt like I was actually Naruto! I learned talk-no-jutsu!',
    stars: 4
  },
  {
    userId: 2,
    spotId: 2,
    review: 'Not that great, reminded me of season 8',
    stars: 5
  },
  {
    userId: 3,
    spotId: 3,
    review: 'great experience wont do again, somehow I ended up in a heist to rob a bank',
    stars: 2
  },
], {})

},
async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Reviews', null, {});

  }
};
