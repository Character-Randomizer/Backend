exports.up = function(knex) {
    return knex.schema
        .createTable(`Skills`, s => {
            s.increments(`skill_id`)
            s.string(`skill`)
                .unique()
                .notNullable()
            s.string(`ability`)
                .notNullable()
            s.string(`skill_desc`, [10000])
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Skills`)
};


