const { test_classes } = require(`../../api/test_constants/classes`)

exports.seed = async function(knex) {
  await knex('Classes').insert(test_classes)
};
