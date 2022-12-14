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
        description: 'Be just like Aang and learn the ways of airbending at this all inlcusive resort!',
        price: 250,
      },
      {
        ownerId: 1,
        address: '123 spotid 13',
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'East Side Beehive',
        description: 'Clean, Zen modern backyard cottage, easy access to SXSW, convention center, great dining, and public transportation. Gorgeous, peaceful space, close to the action but perfect for rest and recharging.',
        price: 254,
      },
      {
        ownerId: 2,
        address: '123 spotid 14',
        city: 'Salobrena',
        state: 'Andalucia',
        country: 'Spain',
        lat:10.123456,
        lng: 12.123456,
        name: 'Casa Acantilado',
        description: 'Public parking space can be found near the property. Pets are not allowed. There are security cameras and/or audio recording devices on the premises, which activate when the alarm goes off. ',
        price: 489,
      },{
        ownerId: 3,
        address: '123 spotid 15',
        city: 'RhineBeck',
        state: 'New York',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'Architectural wonder in the woods',
        description: 'Unique experience, secluded. Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece.',
        price: 475,
      },{
        ownerId: 4 ,
        address: '123 spotid 16',
        city: 'Joshua Tree',
        state: 'California',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'The Kellogg Doolittle House',
        description: 'This is the famous Kellogg Doolittle estate in Joshua Tree California. It is one of the most exclusive homes in the world.',
        price: 800,
      },{
        ownerId: 5 ,
        address: '123 spotid 17',
        city: 'Queimado',
        state: 'Santa Catarina',
        country: 'Brazil',
        lat:10.123456,
        lng: 12.123456,
        name: 'Vitra Cabin',
        description: 'A design cabin at 1200 meters high, with architecture unlike anything you have ever seen.',
        price:190,
      },{
        ownerId:1 ,
        address: '123 spotid 18',
        city: 'Koniakow',
        state: 'Slaskie',
        country: 'Polans',
        lat:10.123456,
        lng: 12.123456,
        name: 'Poli settlement',
        description: 'The village has 5 Icelandic cottages. Each cottage comes with a patio with a seating set and barbecue.',
        price: 196,
      },{
        ownerId: 2,
        address: '123 spotid 19',
        city: 'San Miguel',
        state: 'Gaunajuato',
        country: 'Mexico',
        lat:10.123456,
        lng: 12.123456,
        name: 'Mirrored House on Volcano',
        description: 'Stay in an award-winning home - featured in Vogue, Forbes, NYT & the cover of Architectural Digest! ',
        price: 419,
      },{
        ownerId: 3,
        address: '123 spotid 21',
        city: 'Marathon',
        state: 'Florida',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'East Sister Rock Island',
        description: 'Your own private island right off the City of Marathon in the Florida Keys.',
        price: 830,
      },{
        ownerId: 4,
        address: '123 spotid 22',
        city: 'Ohoka',
        state: 'Canterburry',
        country: 'New Zealand',
        lat:10.123456,
        lng: 12.123456,
        name: 'Area 51 Futuro House',
        description: 'Free pickup in new TESLA! Starting from late March.This amazing 1974 Futuro house (1 of only 50 in the world) has just been fully restored and is ready to offer you an amazing experience now!',
        price: 287,
      },{
        ownerId: 5,
        address: '123 spotid 23',
        city: 'Woodstock',
        state: 'New York',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: '19th Century Dairy Barn',
        description: 'THE POOL IS OPEN! 1869 hand-hewn hemlock dairy barn Rebuilt 2018-2020 on old Downer Family Farm.The 3 story back silo was built new to simulate original silo. Most of the slate roof is original.',
        price: 650,
      },{
        ownerId: 1,
        address: ' 123 spotid 24',
        city: 'Tuckasegee',
        state: 'North Carolina',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'Bear Lake Heaven',
        description: 'Verdant hillsides slope to azure water at this estate in a North Carolina mountain setting that could double for Lake Como. Porch and patio look over the shore, kayaks wait on sandy beaches, and trails lead to waterfalls. ',
        price: 750,
      },{
        ownerId: 2,
        address: '123 spotid 25',
        city: 'Gov Harbour',
        state: 'Eleuthera',
        country: 'Bahamas',
        lat:10.123456,
        lng: 12.123456,
        name: 'Snaresbrook Manor',
        description: 'Palm trees rustle and waves gently lap just steps from your doorstep at this tropical manor. A trail of tiles leads through the manicured yard to the sugary shore.',
        price: 990,
      },{
        ownerId: 3,
        address: '123 spotid 26',
        city: 'Reunion',
        state: 'Florida',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'Castle Pines',
        description: 'Play is at the heart of this modern mansion at the end of a cul-de-sac in the Reunion gated resort community.',
        price: 680,
      },{
        ownerId: 4,
        address: '123 spotid 27',
        city: 'Nassua',
        state: 'West Nass',
        country: 'Bahamas',
        lat:10.123456,
        lng: 12.123456,
        name: 'Seahorse',
        description: 'Though Seahorse Villa has an incredible location on a stretch of white sand and turquoise water, it is more than just a beachfront getaway.',
        price: 805,
      },{
        ownerId: 5,
        address: '123 spotid 28',
        city: 'West End',
        state: 'Grand Bahama',
        country: 'Bahamas',
        lat:10.123456,
        lng: 12.123456,
        name: 'Nandana',
        description: 'You and eleven others can call an immaculate, stylish villa on Grand Bahama Island your own.',
        price: 570,
      },{
        ownerId: 1,
        address: '123 spotid 29',
        city: 'Tulum',
        state: 'Quintana Roo',
        country: 'Mexico',
        lat:10.123456,
        lng: 12.123456,
        name: 'Hacienda Palancar',
        description: 'Sustainability meets spectacular scenery on this 86-acre Spanish Colonial estate in the Sian Ka-an Nature Reserve. ',
        price: 755,
      },{
        ownerId: 2,
        address: '123 spotid 30',
        city: 'Long Bay Hills',
        state: 'Caicos',
        country: 'Turks and Caicos',
        lat:10.123456,
        lng: 12.123456,
        name: 'Clevelander',
        description: 'Mid-century-inspired angles meet soft sand dunes at this bright boho Long Bay retreat.',
        price: 820,
      },{
        ownerId: 3,
        address: '123 spotid 31',
        city: 'Jolly Harbour',
        state: 'Saint Mary',
        country: 'Antigua',
        lat:10.123456,
        lng: 12.123456,
        name: 'Villa Papillon',
        description: 'From the tip of Reeds Point, the peninsula leading into Jolly Harbor, Villa Papillon captures some of Antiguas most breathtaking ocean views.',
        price: 440,
      },{
        ownerId: 4,
        address: '123 spotid 32',
        city: 'Paris',
        state: 'Ile-de-France',
        country: 'France',
        lat:10.123456,
        lng: 12.123456,
        name: 'Luxury Home in Le Marais',
        description: 'Discover our luxurious and exceptional accommodation: in the heart of the most charming district of the capital: the Marais.',
        price: 688,
      },{
        ownerId: 5,
        address: '123 spotid 33',
        city: 'Cape Town',
        state: 'Western Cape',
        country: 'South Africa',
        lat:10.123456,
        lng: 12.123456,
        name: 'Villa Sierra',
        description: 'Minutes from Cape Towns hottest attractions, this secluded mountain villa offers the perfect escape for those who prefer privacy.',
        price: 725,
      },{
        ownerId: 1,
        address: '123 spotid 34',
        city: 'SpringField',
        state: 'Missouri',
        country: 'United States',
        lat:10.123456,
        lng: 12.123456,
        name: 'Unique Earthouse',
        description: 'Earthouse offers unique architectural design providing guests with an open inviting interior.',
        price: 230,
      },
    ])
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Spots', null, {})



  }
};
