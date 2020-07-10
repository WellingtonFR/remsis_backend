exports.up = function (knex) {
  return knex.schema.createTable("conferentes", function (table) {
    table.increments();
    table.string("idConferente").notNullable();
    table.string("nomeConferente").notNullable();
    table.string("created_at");
    table.string("updated_at");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("conferentes");
};
