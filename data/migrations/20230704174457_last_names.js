exports.up = function(knex) {
    return knex.schema
        .createTable(`Last_Names`, ln => {
            ln.increments(`lname_id`)
            ln.string(`lname`)
                .notNullable()
            ln.integer(`race_id`)
                .notNullable()
                .references(`race_id`)
                .inTable(`Races`)
                .onUpdate(`RESTRICT`)
                .onDelete(`RESTRICT`)
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Last_Names`)
};