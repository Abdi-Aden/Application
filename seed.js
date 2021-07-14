const {sequelize} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index') 
//Q: WHY import these models from index vs. from each separate model file?
//Answer: Because the is where the association is defined.
//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Answer: Sequelize workes in key pair values.

//Q: What do you think will happen when we 'seed' this file?
//Answer: will populate in array as an object

const seedRestaurant = [
  {
    name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood'
  },
  {
    name: 'LittleSheep',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian'
  }
]

const seedMenu = [
  {
    title: 'Breakfast'
  },
  {
    title: 'Lunch'
  },
  {
    title: 'Dinner'
  },
]

const seedItem = [
  {
    name: 'bhindi masala',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: true
  },
  {
    name: 'egusi soup',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: false
  },
  {
    name: 'hamburger',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false
  }
]

//Q: Try to decifer the following function.
// Answed bellow
//Q: Why are we using async and await?
//Answer: You wandt the code to be a non blocking code.
const seed = async () => {
  try {
    await sequelize.sync({force: true}) //This creates the table, dropping it first if it already existed
    await Restaurant.bulkCreate(seedRestaurant, {validate: true}) // implies that the seed is synched into the database
    await Menu.bulkCreate(seedMenu, {validate: true}) // following a successful sync
    await Item.bulkCreate(seedItem, {validate: true}) //
    console.log('Seeding success!')
    sequelize.close()  // this is activated and 
  } catch (error) { 
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning? 
// Answer: if succesfull line logs 83 or if err line 86
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })

