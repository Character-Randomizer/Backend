const knex = require('knex')
const knexConfig = require(`../knexfile`)
const env = process.env.NODE_ENV || 'testing'

module.exports = knex(knexConfig[env])