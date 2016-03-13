
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments().primary();
    table.string('username');
    table.string('photo_url', 500);
    table.text('blurb');
    table.text('causes');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
