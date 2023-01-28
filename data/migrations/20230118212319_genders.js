 exports.up = function(knex) {
    return knex.schema
        .createTable(`Genders`, gender => {
            gender.increments(`gender_id`)
            gender.string(`gender`)
                .unique()
                .notNullable()
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Genders`)
};
