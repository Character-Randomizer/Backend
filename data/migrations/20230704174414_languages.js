exports.up = function(knex) {
    return knex.schema
        .createTable(`Languages`, l => {
            l.increments(`lang_id`)
            l.string(`language`)
                .unique()
                .notNullable()
            l.string(`lang_desc`, [10000])
            l.string(`script`)
                .defaultTo(`common`)
            l.specificType(`speakers`, `text[]`)
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Languages`)
};

