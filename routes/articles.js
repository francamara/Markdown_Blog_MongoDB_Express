const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Inarticles')
})

module.exports = router
