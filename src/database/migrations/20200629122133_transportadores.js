exports.up = function (knex) {
  return knex.schema.createTable("transportadores", function (table) {
    table.increments();
    table.string("nomeTransportador").notNullable();
    table.string("placaVeiculo").notNullable();
    table.string("filialAtendida");
    table.string("created_at");
    table.string("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transportadores");
};
