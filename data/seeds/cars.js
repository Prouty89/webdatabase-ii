exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '12345678909876543', make: 'Subaru', model: 'Outback', mileage: 130000},
        { VIN: '10203040506070809', make: 'Ford', model: 'F350', mileage: 2564}
      ]);
    });
};
