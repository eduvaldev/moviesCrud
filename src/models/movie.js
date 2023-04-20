const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const movieSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: false,
    default: 0
  },
  isVisible: {
    type: Boolean,
    require: false,
    default: false,
  },
  addUser: {
    type: Object,
    require: false,
  },
  comment: {
    type: Object,
    require: false,
  }
});

movieSchema.plugin(mongoosePaginate);

const Movie = mongoose.model('Movies', movieSchema);

module.exports = Movie;