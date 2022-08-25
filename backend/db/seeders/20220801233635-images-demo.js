'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        url: 'https://i1.sndcdn.com/avatars-OAyLCVsp5HEPZyaC-Ji3JFw-t500x500.jpg',
        previewImage: true,
        spotId: 1,
        reviewId: 1,
      },
      {
        userId: 2,
        url: 'https://cdnb.artstation.com/p/assets/images/images/012/370/613/large/steve-lund-castle-color2.jpg?1534439770',
        previewImage: true,
        spotId: 2,
        reviewId: 2,
      },
      {
        userId: 3,
        url: 'https://img.gta5-mods.com/q85-w800/images/gta-v-franklin-s-house-update/83817d-8dd5d3-GTA5%202015-12-17%2013-44-24-86.jpg',
        previewImage: true,
        spotId: 3,
        reviewId: 3,

      }
    ], {})

  },
  async down (queryInterface, Sequelize) {
         return queryInterface.bulkDelete('Images',null, {})
  }
}
