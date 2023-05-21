'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684709931/airbnb/naruto_owpj5o.jpg',
        previewImage: true,
        spotId: 1,
        // reviewId: 1,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684709955/airbnb/steve-lund-castle-color2_yi3bgj.jpg',
        previewImage: true,
        spotId: 2,
        // reviewId: 2,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684709983/airbnb/83817d-8dd5d3-GTA5_2015-12-17_13-44-24-86_yyw6vx.jpg',
        previewImage: true,
        spotId: 3,
        // reviewId: 3,

      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710016/airbnb/a0965aa5-3907-466e-b727-0900e2a7e8c7_cgzhpu.avif',
        previewImage: true,
        spotId: 4,
        // reviewId: 4,

      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710055/airbnb/Villa_Mistral-Singapore_sbc8gs.webp',
        previewImage: true,
        spotId: 5,
        // reviewId: 5,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710076/airbnb/60d4058e-98a8-4f30-ba8a-93b101a31c47_mjpsmr.avif',
        previewImage: true,
        spotId: 6,
        // reviewId: 6,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710096/airbnb/562a517e-ed42-4022-bfab-c2356a6a2730_y1ixty.avif',
        previewImage: true,
        spotId: 7,
        // reviewId:7 ,
      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710130/airbnb/2215423b-d2b1-4c5d-86d1-9aa65138e288_ki8wxi.avif',
        previewImage: true,
        spotId: 8,
        // reviewId: 8,
      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710153/airbnb/6-8-pearly-gates_a81pn6.jpg',
        previewImage: true,
        spotId: 9,
        // reviewId:9 ,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710172/airbnb/rick-ross-shows-off-some-of-the-classics-in-his-car-collection-on-mtv-cribs-170028-7_fkra6j.jpg',
        previewImage: true,
        spotId: 10,
        // reviewId:10 ,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710201/airbnb/fc543f9c_original_pvjple.webp',
        previewImage: true,
        spotId: 11,
        // reviewId:11 ,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710221/airbnb/maxresdefault_avocwm.jpg',
        previewImage: true,
        spotId: 12,
        // reviewId: 12 ,
      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710247/airbnb/82c577ee-3422-4fda-ae09-6716d76e8bef_fs6gp4.webp',
        previewImage: true,
        spotId: 13,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710264/airbnb/227d4c26-43d5-42da-ad84-d039515c0bad_dbjgxy.webp',
        previewImage: true,
        spotId: 14,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710284/airbnb/a8fa243d-dac8-4238-93e5-f7aa33072ff8_k0utec.webp',
        previewImage: true,
        spotId: 15,
      },
      {
        userId: 4,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710309/airbnb/17b49e69-a3b4-4f80-8068-868a3892d6cc_js2dbu.webp',
        previewImage: true,
        spotId: 16,
      },
      {
        userId: 5,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710331/airbnb/c3a652be-a5ac-4a3f-9cf0-5771ad91d5a1_ouhqhy.webp',
        previewImage: true,
        spotId: 17,
      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710357/airbnb/a65fcdac-4dc8-409a-a2a5-794d3327eb16_qpk5vj.webp',
        previewImage: true,
        spotId: 18,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710393/airbnb/5e912b77-535f-4c26-8c93-ad5cecdea137_qjjgv0.webp',
        previewImage: true,
        spotId: 19,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710410/airbnb/1efccf3e-b6ba-4ae2-b1da-4a124333898a_du0zct.webp',
        previewImage: true,
        spotId: 20,
      },

      {
        userId: 4,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710428/airbnb/1522e667-72ed-41b7-af13-03af9280b603_dzjtto.webp',
        previewImage: true,
        spotId: 21,
      },
      {
        userId: 5,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710446/airbnb/cf4f2ffe-06d8-421c-8f53-97d1f36ffbaf_z2aoyf.webp',
        previewImage: true,
        spotId: 22,
      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710465/airbnb/ecfc3c6b-a026-4b1a-ac89-4d0fd3040b7b_dqv1kk.webp',
        previewImage: true,
        spotId:23 ,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710484/airbnb/c1b85fa0-98e3-4ad5-a5da-61617ddfa138_jiazvb.webp',
        previewImage: true,
        spotId:24 ,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710506/airbnb/c23ef5df-61e9-4e9e-acd1-90abce6eb27a_il4wc5.webp',
        previewImage: true,
        spotId: 25,
      },
      {
        userId: 4,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710522/airbnb/349a0dbe-5254-45eb-84c2-ad0be14f34ea_gzupja.webp',
        previewImage: true,
        spotId: 26 ,
      },
      {
        userId: 5,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710538/airbnb/db6cf283-965e-414b-9619-54c85997804a_hejpwj.webp',
        previewImage: true,
        spotId: 27,
      },
      {
        userId: 1,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710554/airbnb/75e0b11a-6713-48f9-8e46-f6c6d747f3a7_ekmwde.webp',
        previewImage: true,
        spotId: 28,
      },
      {
        userId: 2,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710575/airbnb/2e2def9b-327b-4663-9794-7039f353ce10_diubqo.webp',
        previewImage: true,
        spotId: 29,
      },
      {
        userId: 3,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710600/airbnb/58cf9a18-b1ec-4152-a893-7f439ee48b95_dczac5.webp',
        previewImage: true,
        spotId: 30,
      },
      {
        userId: 4,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710623/airbnb/feac4021-d60e-4717-8ca6-f0c95ce16de3_ihgah9.webp',
        previewImage: true,
        spotId: 31,
      },
      {
        userId: 5,
        url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710639/airbnb/a9045607-396d-4851-b283-8e6ba90bccda_qxknof.webp',
        previewImage: true,
        spotId: 32,
      },
{
  userId: 1,
  url: 'https://res.cloudinary.com/dgmw9nv61/image/upload/v1684710668/airbnb/612115b3-ab1e-49f5-8c29-976148485acb_lhogzj.jpg',
  previewImage: true,
  spotId: 33,
},

    ], {})

  },
  async down (queryInterface, Sequelize) {
         return queryInterface.bulkDelete('Images',null, {})
  }
}
