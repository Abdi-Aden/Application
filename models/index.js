const {sequelize} = require('../db')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

//associations - What are they? Answer: referencing other tables and creating foreign keys.

Menu.belongsTo(Restaurant) //Q: What will .belongsTo provide Menu? Answer: creating foreign keys.
Restaurant.hasMany(Menu)

Item.belongsTo(Menu)
Menu.hasMany(Item) // what does hasMany provide for us? Answer: One to many associations.

module.exports = { Restaurant, Menu, Item } //exporting models w/ associations  
