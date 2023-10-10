const { skills } = require(`../../common_constants/skills`)

exports.seed = async function(knex) {
  await knex('Skills').insert(skills)
};
