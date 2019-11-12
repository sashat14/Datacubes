
exports.up = function(knex) {
    return knex.schema.createTable('submission_users', tbl => {
        tbl.increments().unique().notNullable().primary()

        tbl.integer('user_id').unsigned().notNullable()
        tbl.foreign('user_id').references('id').inTable('users')

        tbl.integer('submission_id').unsigned()
        tbl.foreign('submission_id').references('id').inTable('submissions')

        tbl.string('role')


    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('submission_users');
};
