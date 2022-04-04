const Gif = require('../models/gif')

const gifSeeds = require('../db/seeds.json')

Gif.deleteMany({})
  .then(() => Gif.insertMany(gifSeeds))
  .then(console.log)
  .then(console.error)
  .finally(process.exit)