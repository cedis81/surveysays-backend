
const express = require('express')
const passport = require('passport')
const Answer = require('../models/answer')
const Survey = require('../models/survey')
const handle = require('../../lib/error_handler')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

router.get('/surveys/:surveyId/answers', requireToken, (req, res) => {
  Survey.findById(req.params.surveyId)
    .populate('answer')
    .then(handle404)
    .then(survey => {
      // console.log(survey)
      res.status(200).json({ answer: survey.answer })
    })
    .catch(err => handle(err, res))
})

router.post('/surveys/:surveyId/answers', requireToken, (req, res) => {
  req.body.answer.owner = req.user.id

  let answer

  Answer.create(req.body.answer)
    .then(createdAnswer => {
      answer = createdAnswer
      return Survey.findById(req.params.surveyId)
    })
    .then(survey => {
      // console.log(survey, answer)
      if (!survey.answer) survey.answer = []
      survey.answer = survey.answer.concat([answer._id])
      return survey
    })
    .then(survey => {
      // console.log(survey)
      survey.save()
    })
    .then(() => res.status(201).json({ answer: answer.toObject() }))
    .catch(err => handle(err, res))
})

module.exports = router
