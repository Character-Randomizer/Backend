const { test_alignments } = require('../../api/test_constants/alignments')
 
exports.seed = async function(knex) {
  await knex('Alignments').insert(test_alignments)};
