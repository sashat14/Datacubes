
exports.seed = function(knex) {
      return knex('companies').insert([
        { name: 'Google', address: '1600 Amphitheatre Parkway, Mountainview, CA'},
        { name: 'Apple', address: '1 Infinite Loop, Cupertino, CA'},
        { name: 'Datacubes', address: '425 N Martingale Ave, Schaumburg. IL'}
      ]);
};
