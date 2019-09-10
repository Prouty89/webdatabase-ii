
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 17).unique().notNullable();
      tbl.string('make', 75).notNullable();
      tbl.string('model', 100).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission type', 50);
      tbl.string('title status', 75);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
