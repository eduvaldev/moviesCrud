const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const commentSchema = new Schema({
  text: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "movies"
  }
})

commentSchema.plugin(mongoosePaginate);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;