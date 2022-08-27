'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 return queryInterface.bulkInsert('Reviews', [
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
    stars: 4
  },

  {
    userId: 3,
    spotId: 4,
    review: 'house was small',
    stars: 3
  }
], {})

},
async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Reviews', null, {});

  }
};
