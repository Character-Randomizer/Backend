 
exports.seed = async function(knex) {
  await knex('Characters').insert([
    {
      user_id: 1, 
      first_name: `Marele`,
      last_name: `Stormwind`,
      class_id: 10,
      class_focus_id: 10,
      alignment_id: 3,
      race_id: 7, 
      phys_description: `Light brown hair with silver/blue highlights. Her skin is light but darker than most human - Illuskan. Marele has steely grey eyes with gold speckles in them and has a slender build.`,
      strength_stat: 14,
      dex_stat: 16,
      con_stat: 15, 
      intelligence_stat: 15,
      wisdom_stat: 16,
      charisma_stat: 15,
      gender_id: 1, 
      height: `5'8''`, 
      age: 42,
      weight: 152,
      background_id: 5,
      level: 8
    }
  ]);
};
