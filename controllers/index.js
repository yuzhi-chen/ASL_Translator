const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    { title: 'ASL-to-English writing translator',
      description: 'Welcome! This program aids Deaf children who are struggling with reading, by translating ASL finger-spelling into English. Just sign with your hand, take a photo, and the translator will give you the english letter!' })
})

module.exports = router
