exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments("id")
    table.string("name")
    table.timestamp("created_at")
    table.timestamp("updated_at")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
