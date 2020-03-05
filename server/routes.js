'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

module.exports = (app, config) => {
  // External Middleware
  app.use(express.static(path.join(__dirname, '../client')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

}