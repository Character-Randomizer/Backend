exports.up = function(knex) {
    return knex.schema
        .createTable(`Classes`, c => {
            c.increments(`class_id`)
            c.string(`class`)
                .unique()
                .notNullable()
            c.string(`class_description`, [10000])
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Classes`)
};
