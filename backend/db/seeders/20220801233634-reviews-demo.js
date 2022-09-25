'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 return queryInterface.bulkInsert('Reviews', [
  {
    userId: 2,
    spotId: 1,
    review: 'I felt like I was actually Naruto! I learned talk-no-jutsu!',
    stars: 4
  },
  {
    userId: 3,
    spotId: 2,
    review: 'Not that great, reminded me of season 8',
    stars: 5
  },
  {
    userId: 1,
    spotId: 3,
    review: 'great experience wont do again, somehow I ended up in a heist to rob a bank',
    stars: 4,
  },

  {
    userId: 3,
    spotId: 4,
    review: 'house was small',
    stars: 3,
  },
  {
    userId: 2,
    spotId: 5,
    review: 'yessir this spot was a most definite yezzzzir',
    stars: 5,

  },
  {
    userId: 3,
    spotId: 6,
    review:'wonderful place enjoyed my stay, would deff come again',
    stars: 4
  },
  {
    userId: 2,
    spotId: 7,
    review: 'sup bruv spots not it bruv',
    stars: 5

  },
  {
    userId: 1,
    spotId:8,
    review: 'hey im new to leaving reviews did I do this right, anyway great spot, whoever designed this website must be a prodigy',
    stars: 3,
  },
  {
    userId:2,
    spotId: 9,
    review: 'saw someone leave a review about the web design not sure if I agree',
    stars:3,
  },
  {
    userId: 3,
    spotId: 10,
    review: 'wow great spot, hope we get some more stimulus checks from joe bizzy so I can never leave mwuhahah',
    stars: 4,
  },
  {
    userId: 1,
    spotId:11,
    review: 'hmmmmmmmmmmmmmmmm curious place indeed not sure if I would visit again',
    stars: 3
  },
  {
    userId: 2,
    spotId:12,
    review: 'huh not sure what I was expecting, decent spot I guess',
    stars: 3,
  },
  {
    userId: 4,
    spotId: 1,
    review: 'my name is John Bro and I approve of this spot',
    stars: 5
  },
  {
    userId: 5,
    spotId:2,
    review: 'If I had more time in the off season I would stay here longer, great spot',
    stars: 5
  },
  {
    userId: 4,
    spotId:3,
    review:'had a great time, very family friendly place, will come back',
    stars: 4
  },
  {
    userId: 5,
    spotId:4,
    review: 'I love trevbnb best website ever!',
    stars: 4
  },
  {
    userId: 4,
    spotId: 5,
    review: 'I heard this place has a great host, I was not let down!',
    stars: 4,
  },
  {
    userId: 5,
    spotId: 6,
    review: 'If you stay at this place make sure you bring your own cooler fridge doesnt work',
    stars: 3,
  },
  {
    userId: 4,
    spotId: 7,
    review: 'hello all I had a decent time at this place, the cost is reasonable',
    stars: 4,
  },
  {
    userId: 5,
    spotId: 8,
    review: 'not sure why I did not book this place sooner',
    stars: 4
  },
  {
    userId: 4,
    spotId: 9,
    review: 'me and all my coworkers had a great time here!',
    stars: 4,
  },
  {
    userId: 5,
    spotId: 10,
    review: 'splendid experience for my first time in the States',
    stars: 4
  },
  {
    userId: 4,
    spotId: 11,
    review: 'how do I say this the right way... this place rocks!',
    stars: 5
  },
  {
    userId: 5,
    spotId: 12,
    review:'If my terrible job gave me more vacations hours I would stay here longer!',
    stars: 5,
  },

], {})

},
async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Reviews', null, {});

  }
};
