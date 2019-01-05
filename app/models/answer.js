const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Answer', answerSchema)
