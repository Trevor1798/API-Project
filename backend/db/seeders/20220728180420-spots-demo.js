'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
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


      },
      {
        ownerId: 2,
        address: '123 Capital City rd',
        city: 'King\'s Landing',
        state: 'Crownlands',
        country: 'Westeros',
        lat: 15.123456,
        lng: 18.123456,
        name: 'Game of Thrones Inn',
        description: 'Sit in the Iron Throne! Live like a King or Queen at this all inclusive resort!',
        price: 349,


      },
      {
        ownerId: 3,
        address: '3671 WhispyMound Drive',
        city: 'Los Santos',
        state: 'California',
        country: 'United States',
        lat: 2.123456,
        lng: 3.123456,
        name: 'Franklin\'s House',
        description: 'This house is a monument to the history in Los Santos! Experience what Franklin experienced on his legendary journey with Michael and Trevor',
        price: 150,

      },
    ])
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', null, {})



  }
};
