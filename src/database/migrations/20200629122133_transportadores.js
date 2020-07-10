exports.up = function (knex) {
  return knex.schema.createTable("transportadores", function (table) {
    table.increments();
    table.integer("nomeTransportador").notNullable();
    table.string("placaVeiculo").notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transportadores");
};
