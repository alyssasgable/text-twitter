exports.up = function(knex, Promise) {
    return knex.schema.createTable('tableName', table => {
      table.increments(); 
      table
        .string('first_name', 36)
        .notNullable()
        .unique();
      table
        .string('email', 36)
        .notNullable();
      table
        .timestamp('signup_date')
        .defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tableName');
  };