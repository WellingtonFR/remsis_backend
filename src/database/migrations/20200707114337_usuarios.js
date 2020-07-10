exports.up = function (knex) {
  return knex.schema.createTable("usuarios", function (table) {
    table.increments();
    table.string("nomeUsuario").notNullable();
    table.string("idUsuario").notNullable();
    table.string("hashedPassword").notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("usuarios");
};
