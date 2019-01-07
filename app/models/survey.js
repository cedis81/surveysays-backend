const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
