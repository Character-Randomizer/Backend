exports.up = function(knex) {
    return knex.schema
        .createTable(`Abilities`, ab => {
            ab.increments(`ability_id`)
            ab.string(`ability`)
                .unique()
                .notNullable()
            ab.string(`acronym`)
                .unique()
                .notNullable()
            ab.string(`ability_desc`, [10000])
            
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Abilities`)
};

