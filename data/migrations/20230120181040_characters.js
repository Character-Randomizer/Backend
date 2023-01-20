exports.up = function(knex) {
    return knex.schema
      .createTable(`characters`, char => {
          char.increments(`char_id`)
          char.integer(`user_id`)
              .unsigned()
              .notNullable()
              .references(`user_id`)
              .inTable(`users`)
              .onUpdate(`CASCADE`)
              .onDelete(`RESTRICT`)
          char.string(`first_name`)
              .notNullable()
          char.string(`last_name`)
          char.integer(`level`)
              .notNullable()
          char.integer(`class_id`)
              .unsigned()
              .notNullable()
              .references(`class_id`)
              .inTable(`classes`)
              .onUpdate(`RESTRICT`)
              .onDelete(`RESTRICT`)
          char.integer(`class_focus_id`)
              .unsigned()
              .notNullable()
              .references(`class_focus_id`)
              .inTable(`class_focuses`)
              .onUpdate(`RESTRICT`)
              .onDelete(`RESTRICT`)
          char.integer(`alignment_id`)
              .unsigned()
              .notNullable()
              .references(`alignment_id`)
              .inTable(`alignments`)
              .onUpdate(`RESTRICT`)
              .onDelete(`RESTRICT`)
          char.integer('race_id')
              .unsigned()
              .notNullable()
              .references(`race_id`)
              .inTable(`races`)
              .onUpdate(`RESTRICT`)
              .onDelete(`RESTRICT`)
          char.string(`phys_description`)
          char.integer(`strength_stat`)
              .notNullable()
          char.integer(`dex_stat`)
              .notNullable()
          char.integer(`con_stat`)
              .notNullable()
          char.integer(`intelligence_stat`)
              .notNullable()
          char.integer(`wisdom_stat`)
              .notNullable()
          char.integer(`charisma_stat`)
              .notNullable()
          char.integer(`gender_id`)
              .unsigned()
              .notNullable()
              .references(`gender_id`)
              .inTable(`genders`)
              .onUpdate(`RESTRICT`)
              .onDelete(`RESTRICT`)
          char.string(`height`)
          char.integer(`age`)
          char.integer(`weight`)
          char.integer(`background_id`)
              .unsigned()
              .references(`background_id`)
              .inTable(`backgrounds`)
              .onUpdate(`RESTRICT`)
              .onDelete(`RESTRICT`)
          })
  };
  
   
  exports.down = function(knex) {
    return knex.schema   
      .dropTableIfExists(`characters`)
  };
  