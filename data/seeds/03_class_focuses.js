const { test_focuses } = require('../../common_constants/class_focuses')
 
 exports.seed = async function(knex) {
  await knex('Class_Focuses').insert(test_focuses);
};
