'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        url: 'https://i1.sndcdn.com/avatars-OAyLCVsp5HEPZyaC-Ji3JFw-t500x500.jpg',
        previewImage: true,
        spotId: 1,
        // reviewId: 1,
      },
      {
        userId: 2,
        url: 'https://cdnb.artstation.com/p/assets/images/images/012/370/613/large/steve-lund-castle-color2.jpg?1534439770',
        previewImage: true,
        spotId: 2,
        // reviewId: 2,
      },
      {
        userId: 3,
        url: 'https://img.gta5-mods.com/q85-w800/images/gta-v-franklin-s-house-update/83817d-8dd5d3-GTA5%202015-12-17%2013-44-24-86.jpg',
        previewImage: true,
        spotId: 3,
        // reviewId: 3,

      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg',
        previewImage: true,
        spotId: 4,
        // reviewId: 4,

      },
      {
        userId: 1,
        url: 'https://foyr.com/learn/wp-content/uploads/2019/03/Villa_Mistral-Singapore.jpg',
        previewImage: true,
        spotId: 5,
        // reviewId: 5,
      },
      {
        userId: 3,
        url: 'https://a0.muscache.com/im/pictures/60d4058e-98a8-4f30-ba8a-93b101a31c47.jpg',
        previewImage: true,
        spotId: 6,
        // reviewId: 6,
      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-54095418/original/562a517e-ed42-4022-bfab-c2356a6a2730.jpeg',
        previewImage: true,
        spotId: 7,
        // reviewId:7 ,
      },
      {
        userId: 1,
        url: 'https://a0.muscache.com/im/pictures/2215423b-d2b1-4c5d-86d1-9aa65138e288.jpg',
        previewImage: true,
        spotId: 8,
        // reviewId: 8,
      },
      {
        userId: 1,
        url: 'https://d.newsweek.com/en/full/966320/6-8-pearly-gates.jpg',
        previewImage: true,
        spotId: 9,
        // reviewId:9 ,
      },
      {
        userId: 3,
        url: 'https://s1.cdn.autoevolution.com/images/news/rick-ross-shows-off-some-of-the-classics-in-his-car-collection-on-mtv-cribs-170028-7.jpg',
        previewImage: true,
        spotId: 10,
        // reviewId:10 ,
      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/74602604/fc543f9c_original.jpg',
        previewImage: true,
        spotId: 11,
        // reviewId:11 ,
      },
      {
        userId: 3,
        url: 'https://i.ytimg.com/vi/A76eBKRek6A/maxresdefault.jpg',
        previewImage: true,
        spotId: 12,
        // reviewId: 12 ,
      },

    ], {})

  },
  async down (queryInterface, Sequelize) {
         return queryInterface.bulkDelete('Images',null, {})
  }
}
