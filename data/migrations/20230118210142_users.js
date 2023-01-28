exports.up = function(knex) {
    return knex.schema
        .createTable('Users', users => {
            users.increments(`user_id`)
            users.string(`first_name`)
                .notNullable()
            users.string(`last_name`)
                .notNullable()
            users.string(`username`)
                .unique()
                .notNullable()
            users.string(`password`)
                .notNullable()
            users.string(`email`)
                .unique()
                .notNullable()
            users.boolean(`terms`)
                .notNullable()
            users.integer(`dob`)
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Users')
};
