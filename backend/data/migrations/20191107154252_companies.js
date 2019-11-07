
exports.up = function(knex) {
  return knex.schema.createTable('companies', tbl => {
    tbl.increments().unique().notNullable().primary()
    tbl.string("name")
    tbl.string("address")
  })
}
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('companies');
};
