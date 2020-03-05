const db = require('./db/db')
const express = require('express')
const Sequelize = require('sequelize')
const config = require('./config/config')

// Initialize database
var schema = new Sequelize(config.db.name, config.db.user, config.db.pass, {logging: false, host: 'localhost', dialect: 'postgresql'})
db.syncTables(schema).then(() => {
  console.log('DB Initialized')
})

// Initialize Server
const app = express()
require('./routes')(app, db, config) // Import all middleware and routes

// Launch Server
app.listen(config.server.port, '0.0.0.0', () => {
  console.log('Server running on port ', config.server.port)
})
