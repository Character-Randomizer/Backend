 exports.up = function(knex) {
    return knex.schema
        .createTable('Alignments', align => {
            align.increments(`alignment_id`)
            align.string(`alignment`)
                .notNullable()
            align.string(`alignment_acronym`)
                .notNullable()
            align.string(`alignment_description`)
        })
};

 
exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists(`Alignments`)
};
