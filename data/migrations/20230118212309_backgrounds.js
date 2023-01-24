exports.up = function(knex) {
    return knex.schema
        .createTable(`backgrounds`, bg => {
            bg.increments(`background_id`)
            bg.string(`background_name`)
                .notNullable()
                .unique()
            bg.string(`background_description`, [10000])
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`backgrounds`)
};
