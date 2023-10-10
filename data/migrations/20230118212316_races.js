 exports.up = function(knex) {
    return knex.schema
        .createTable(`Races`, race => {
            race.increments(`race_id`)
            race.string(`race_name`)
                .unique()
                .notNullable()
            race.json('age')
                .notNullable()
            race.json(`height`)
            race.json(`weight`)
            race.integer(`speed`)
                .notNullable()
                .defaultTo(30)
            race.json(`proficiencies`)
            race.json('bonuses')
            race.json(`subrace`)
            race.string(`size`)
                .notNullable()
            race.json(`languages`)
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Races`)
};
