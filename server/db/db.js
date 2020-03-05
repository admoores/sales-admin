'use strict'
const Sequelize = require('sequelize')

let tables = {}
let schemas = {}

schemas.purchases = {
  customerName: Sequelize.STRING,
  itemDescription: Sequelize.STRING,
  itemPrice: Sequelize.DOUBLE,
  quantity: Sequelize.INTEGER,
  merchantName: Sequelize.STRING,
  merchantAddress: Sequelize.STRING
}

const syncTables = (schema, force) => {
  force = !!force

  tables.Users = schema.define('purchase', schemas.purchases)

  return schema.sync({force: force})
}

module.exports = {
  tables: tables,
  syncTables: syncTables
}
