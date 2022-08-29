'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {

        ownerId: 1,
        address: 'the village hidden in the leaves',
        city: 'Hidden Leaf Village',
        state: 'Konaha',
        country: 'The land of fire',
        lat: 10.123456,
        lng: 15.123456,
        name: "Naruto's Apartment",
        description: 'This all inclusive stay at the 7th Hokage\'s first apartment is a sight to see!',
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
      {
        ownerId: 2,
        address: 'On a hill, somewhere',
        city: 'Lac-Beauport',
        state: 'New Jersey',
        country: 'United States',
        lat: 10.123456,
        lng: 15.123456,
        name: "Snow-den",
        description: 'Incredible views',
        price: 100,

      },
      {
        ownerId: 1,
        address: 'O-block',
        city: 'Chicago',
        state: 'Illinois',
        country: 'United States',
        lat: 12.123442,
        lng: 11.123456,
        name: 'Villa',
        description: 'Beautiful villa right in Southside Chicago!',
        price: 300
      },
      {
        ownerId: 3,
        address: 'cold very cold land',
        city: 'Bearland',
        state: 'Alaska',
        country: 'United States',
        lat: 12.123455,
        lng: 10.123456,
        name: 'An actual igloo',
        description: 'Is the freezing cold worth seeing the aurora borealis? We think so! We are calling all adventures alike to stay at our perfect igloo right our here in cold very cold land, Bearland!',
        price: 250,
      },
      {
        ownerId: 2,
        address: 'Tony Starks place bruv',
        city: 'Dry Place',
        state: 'Arizona',
        country: 'United States',
        lat: 10.123432,
        lng: 45.234323,
        name: 'Tony Starks House',
        description: 'Beautfiul pad, beautiful views, beautiful life, come out at Tony Starks house in Dry Place, Arizona!',
        price: 250,
      },
      {
        ownerId: 1,
        address: 'middle of desert',
        city: 'Also Dry Place',
        state: 'Arizona',
        country: 'United States',
        lat: 10.123456,
        lng: 12.123456,
        name: 'Survival Challenge: Medium',
        description: 'Take your chance in the middle of the desert with no tv no internet and a humble amount of scorpions!',
        price: 50,
      },
      {
        ownerId: 1,
        address: 'unknown',
        city: 'Heaven',
        state: 'New Jersey',
        country: 'United States',
        lat: 33.333333,
        lng: 77.777777,
        name: 'Heavens Gates',
        description: 'Is he real? Found out for yourself at this all inlusive resort at Heavens Gate!',
        price: 777,
      },
      {
        ownerId: 3,
        address: 'Rick Ross house',
        city: 'Miami',
        state: 'Florida',
        country: 'United States',
        lat: 10.123456,
        lng: 12.534356,
        name: 'MTV Cribs: Rick Ross House',
        description: 'Rick Ross is one of our best part-time host at this company, enjoy the mtv cribs experience!',
        price: 250,
      },
      {
        ownerId: 2,
        address: 'farm cabin rd',
        city: 'New York City',
        state: 'New York',
        country: 'United States',
        lat: 33.123456,
        lng: 11.123456,
        name: 'Farm House',
        description: 'Help us work on the farm at a discounted price now only 100 a night we offer the all in one farming experience, rooster wake up call is an additional amenity for $10',
        price: 100,
      },
      {
        ownerId: 3,
        address: 'air temple drive',
        city: 'Jersey City',
        state: 'New Jersey',
        country: 'United States',
        lat: 12.123455,
        lng: 11.123455,
        name: 'Northern Air Temple',
        description: 'Be just like Aang and learn the ways of airbending at the this all inlcusive resort!',
        price: 250,
      },

    ])
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Spots', null, {})



  }
};
