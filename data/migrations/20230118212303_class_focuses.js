exports.up = function(knex) {  
    return knex.schema
        .createTable(`class_focuses`, cf => {
            cf.increments(`class_focus_id`)
            cf.integer(`class_id`)
                .unsigned()
                .notNullable()
                .references(`class_id`)
                .inTable(`classes`)
                .onUpdate(`RESTRICT`)
                .onDelete(`RESTRICT`)  
            cf.string(`class_focus`)
                .unique()
                .notNullable()
            cf.string(`focus_description`)
        })
};

 
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists(`class_focuses`)
};
