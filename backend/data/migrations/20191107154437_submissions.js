
exports.up = function(knex) {
    return knex.schema.createTable('submissions', tbl => {
        tbl.increments().unique().notNullable().primary()

        tbl.integer('company_id').unsigned().notNullable()
        tbl.foreign('company_id').references('id').inTable('companies')

        tbl.string('notes')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('submissions');
};
