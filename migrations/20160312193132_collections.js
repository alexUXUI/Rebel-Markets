
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table){
      table.increments().primary();
      table.string('username');
      table.string('photo_url', 500);
      table.text('blurb');
      table.text('causes');
      table.string('password');
    }),
    knex.schema.createTableIfNotExists('collections', function(table){
      table.increments().primary();
      table.string('title');
      table.text('description');
      table.text('photo');
      table.text('music');
      table.string('link');
      table.string('causes');
      table.boolean('forsale');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('collections')
  ])
};
