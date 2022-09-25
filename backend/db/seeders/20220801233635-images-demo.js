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
      {
        userId: 1,
        url: 'https://a0.muscache.com/im/pictures/82c577ee-3422-4fda-ae09-6716d76e8bef.jpg?im_w=1200',
        previewImage: true,
        spotId: 13,
      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=1200',
        previewImage: true,
        spotId: 14,
      },
      {
        userId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=1200',
        previewImage: true,
        spotId: 15,
      },
      {
        userId: 4,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/17b49e69-a3b4-4f80-8068-868a3892d6cc?im_w=1200',
        previewImage: true,
        spotId: 16,
      },
      {
        userId: 5,
        url: 'https://a0.muscache.com/im/pictures/c3a652be-a5ac-4a3f-9cf0-5771ad91d5a1.jpg?im_w=1200',
        previewImage: true,
        spotId: 17,
      },
      {
        userId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51762485/original/a65fcdac-4dc8-409a-a2a5-794d3327eb16.jpeg?im_w=1200',
        previewImage: true,
        spotId: 18,
      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-43240473/original/5e912b77-535f-4c26-8c93-ad5cecdea137.jpeg?im_w=1200',
        previewImage: true,
        spotId: 19,
      },
      {
        userId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/1efccf3e-b6ba-4ae2-b1da-4a124333898a.jpeg?im_w=1200',
        previewImage: true,
        spotId: 20,
      },

      {
        userId: 4,
        url: 'https://a0.muscache.com/im/pictures/1522e667-72ed-41b7-af13-03af9280b603.jpg?im_w=720',
        previewImage: true,
        spotId: 21,
      },
      {
        userId: 5,
        url: 'https://a0.muscache.com/im/pictures/cf4f2ffe-06d8-421c-8f53-97d1f36ffbaf.jpg?im_w=1200',
        previewImage: true,
        spotId: 22,
      },
      {
        userId: 1,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-646389922475110978/original/ecfc3c6b-a026-4b1a-ac89-4d0fd3040b7b?im_w=1200',
        previewImage: true,
        spotId:23 ,
      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-648434433589386891/original/c1b85fa0-98e3-4ad5-a5da-61617ddfa138?im_w=1200',
        previewImage: true,
        spotId:24 ,
      },
      {
        userId: 3,
        url: 'https://a0.muscache.com/im/pictures/c23ef5df-61e9-4e9e-acd1-90abce6eb27a.jpg?im_w=1200',
        previewImage: true,
        spotId: 25,
      },
      {
        userId: 4,
        url: 'https://a0.muscache.com/im/pictures/349a0dbe-5254-45eb-84c2-ad0be14f34ea.jpg?im_w=1200',
        previewImage: true,
        spotId: 26 ,
      },
      {
        userId: 5,
        url: 'https://a0.muscache.com/im/pictures/db6cf283-965e-414b-9619-54c85997804a.jpg?im_w=1200',
        previewImage: true,
        spotId: 27,
      },
      {
        userId: 1,
        url: 'https://a0.muscache.com/im/pictures/75e0b11a-6713-48f9-8e46-f6c6d747f3a7.jpg?im_w=720',
        previewImage: true,
        spotId: 28,
      },
      {
        userId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-559373380108515955/original/2e2def9b-327b-4663-9794-7039f353ce10?im_w=1200',
        previewImage: true,
        spotId: 29,
      },
      {
        userId: 3,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-610872907151100216/original/58cf9a18-b1ec-4152-a893-7f439ee48b95?im_w=1200',
        previewImage: true,
        spotId: 30,
      },
      {
        userId: 4,
        url: 'https://a0.muscache.com/im/pictures/feac4021-d60e-4717-8ca6-f0c95ce16de3.jpg?im_w=1200',
        previewImage: true,
        spotId: 31,
      },
      {
        userId: 5,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53856003/original/a9045607-396d-4851-b283-8e6ba90bccda?im_w=1200',
        previewImage: true,
        spotId: 32,
      },
{
  userId: 1,
  url: 'https://a0.muscache.com/im/pictures/612115b3-ab1e-49f5-8c29-976148485acb.jpg?im_w=1200',
  previewImage: true,
  spotId: 33,
},

    ], {})

  },
  async down (queryInterface, Sequelize) {
         return queryInterface.bulkDelete('Images',null, {})
  }
}
