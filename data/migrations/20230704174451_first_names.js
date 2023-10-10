exports.up = function(knex) {
    return knex.schema
        .createTable(`First_Names`, fn => {
            fn.increments(`fname_id`)
            fn.string(`fname`)
                .notNullable()
            fn.integer(`race_id`)
                .notNullable()
                .references(`race_id`)
                .inTable(`Races`)
                .onUpdate(`RESTRICT`)
                .onDelete(`RESTRICT`)
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`First_Names`)
};


