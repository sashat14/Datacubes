
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments().unique().notNullable().primary()
      tbl.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
