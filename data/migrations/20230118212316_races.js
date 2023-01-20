 exports.up = function(knex) {
    return knex.schema
        .createTable(`races`, race => {
            race.increments(`race_id`)
            race.string(`race_name`)
                .unique()
                .notNullable()
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`races`)
};
