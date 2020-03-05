const express = require('express')
const Sequelize = require('sequelize')
const config = require('./config/config')


// Initialize Server
const app = express()
require('./routes')(app, config) // Import all middleware and routes

// Launch Server
app.listen(config.server.port, '0.0.0.0', () => {
  console.log('Server running on port ', config.server.port)
})
