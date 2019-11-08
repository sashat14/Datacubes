
exports.seed = function(knex) {
      return knex('users').insert([
        {name: 'Sally Mae'},
        {name: 'John Smith'},
        {name: 'Jonathan Ives'}
      ]);
};
