exports.seed = function(knex, Promise) {
    return Promise.all([
      knex('users').insert({
        username: 'Alex',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/802/card_15-10-FS-DP-5619.jpg',
        blurb: 'I like turtles',
        causes: 'Animal Rights',
        password: '123'
      }),
    ]);
  };
