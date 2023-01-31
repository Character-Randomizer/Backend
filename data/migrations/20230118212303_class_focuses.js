exports.up = function(knex) {  
    return knex.schema
        .createTable(`Class_focuses`, cf => {
            cf.increments(`class_focus_id`)
            cf.integer(`class_id`)
                .unsigned()
                .notNullable()
                .references(`class_id`)
                .inTable(`Classes`)
                .onUpdate(`RESTRICT`)
                .onDelete(`RESTRICT`)  
            cf.string(`class_focus`)
                .unique()
                .notNullable()
            cf.string(`focus_description`, [10000])
        })
};

 
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists(`Class_focuses`)
};
