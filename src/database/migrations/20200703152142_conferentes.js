exports.up = function (knex) {
  return knex.schema.createTable("conferentes", function (table) {
    table.increments();
    table.string("idConferente").notNullable();
    table.string("nomeConferente").notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("conferentes");
};
