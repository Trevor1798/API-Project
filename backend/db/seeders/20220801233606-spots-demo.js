'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  let spotInfo = [
      {
        ownerId: 1,
        address: 'the village hidden in the leaves',
        city: 'Hidden Leaf Village',
        state: 'Konaha',
        country: 'The land of fire',
        lat: 10.123456,
        lng: 15.123456,
        name: "Naruto's Apartment",
        description: ' This all inclusive stay at the 7th Hokage\'s first apartment is a sight to see!',
        price: 100,
        previewImage: 'https://the-naruto-world.fandom.com/wiki/Konoha?file=Konohavillage.jpg'

      },
      {
        ownerId: 2,
        address: '123 Capital City rd',
        city: 'King\s Landing',
        state: 'Crownlands',
        country: 'Westeros',
        lat: 15.123456,
        lng: 18.123456,
        name: 'Game of Thrones Inn',
        description: 'Sit in the Iron Throne! Live like a King or Queen at this all inclusive resort!',
        price: 349,
        previewImage: 'https://gameofthrones.fandom.com/wiki/King%27s_Landing?file=Redkeep_kingslanding.jpg'

      },
      {
        ownerId: 3,
        address: '3671 WhispyMound Drive',
        city: 'Los Santos',
        state: 'California',
        country: 'United States',
        lat: 2.123456,
        lng: 3.123456,
        name: 'Franklin\s House',
        description: 'This house is a monument to the history in Los Santos! Experience what Franklin experienced on his legendary journey with Michael and Trevor',
        price: 150,
        previewImage: 'https://gta.fandom.com/wiki/Clinton_Residence?file=ClintonResidence-GTAV.jpg'

      },
  ]
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
      return queryInterface.bulkDelete('Spots', {
          city: { [Op.in]: ['the village hidden in the leaves', '123 Capital City rd', '3671 WhispyMound Drive']}
      })
  }
};
