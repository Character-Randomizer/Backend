const { test_focuses } = require('../../common_constants/class-focuses')
 
 exports.seed = async function(knex) {
  await knex('Class_Focuses').insert(test_focuses);
};
