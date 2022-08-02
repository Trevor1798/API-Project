'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        url: 'https://the-naruto-world.fandom.com/wiki/Konoha?file=Konohavillage.jpg',
        previewImg: true,
        spotId: 1,
        reviewId: 1,
      },
      {
        userId: 2,
        url: 'https://gameofthrones.fandom.com/wiki/King%27s_Landing?file=Redkeep_kingslanding.jpg',
        previewImg: true,
        spotId: 2,
        reviewId: 2,
      },
      {
        userId: 3,
        url: 'https://gta.fandom.com/wiki/Clinton_Residence?file=ClintonResidence-GTAV.jpg',
        previewImg: true,
        spotId: 3,
        reviewId: 3,

      }
    ], {})

  },
  async down (queryInterface, Sequelize) {
         await queryInterface.bulkDelete('Images',null, {})
  }
}
