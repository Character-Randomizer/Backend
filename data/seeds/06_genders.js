 
exports.seed = async function(knex) {
  await knex('Genders').insert([
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
