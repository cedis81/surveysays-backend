'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'surveysays-backend'

// create the mongodb uri for development and test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
// 11/10/2020 mLab shut down Heroku add-on. Detatched add-on on this date
// changed below from MONGODB_URI to DB_URI per mlab docs to switch to new
// heroku config
const currentDb = process.env.DB_URI || localDb

module.exports = currentDb
