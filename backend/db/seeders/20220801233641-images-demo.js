'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        reviewId: 1,
        spotId: 1,
        url: 'https://the-naruto-world.fandom.com/wiki/Konoha?file=Konohavillage.jpg',
      },
      {
        spotId: 2,
        reviewId: 2,
        url: 'https://gameofthrones.fandom.com/wiki/King%27s_Landing?file=Redkeep_kingslanding.jpg'
      },
      {
        spotId: 3,
        reviewId: 3,
        url: 'https://gta.fandom.com/wiki/Clinton_Residence?file=ClintonResidence-GTAV.jpg'

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
