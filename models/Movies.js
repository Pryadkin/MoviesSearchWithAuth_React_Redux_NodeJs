const { Schema, model } = require('mongoose');

const schema = new Schema({
  userId: {
    type: String,
    required: true
  },
  movies: {
    type: Object
  }
})

module.exports = model('Movies', schema);