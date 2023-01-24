const bcrypt = require(`bcryptjs`)
require('dotenv').config()

const hash = bcrypt.hashSync(process.env.USER, 9)

// Used this article to help me: https://medium.com/@jengopockets/encrypting-seeded-passwords-with-node-js-knex-and-bcrypt-e2efe56f745e

//Need to set environmental variable when setting up seeds, unsure how to modify this for more than one user at this time
  //Possibly creating multiple different environmental variables and then setting them at initialization

exports.seed = async function(knex) {
  await knex('users').insert([
    {first_name: 'Testy', 
    last_name: `Subject`, 
    username: `testSubject47`, 
    password: hash,
    email: `test47@gmail.com`, 
    terms: true, 
    dob: 09061647
  },
  ]);
};