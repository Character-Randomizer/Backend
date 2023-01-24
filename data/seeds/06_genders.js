 
exports.seed = async function(knex) {
 
  await knex('genders').insert([
    {
      gender: `Female`
    },
    {
      gender: `Male`
    },
    {
      gender: `Non-Binary`
    }
  ]);
};
