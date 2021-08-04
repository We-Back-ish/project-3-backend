const express = require('express')
const router = express.Router()

const Message = require('../models/group-model')

// Group messages home route
router.get('/group', (req, res) => {
  Message.find({})
  .then(g => res.json(g))
})

// Create 
router.post('/group', (req, res) => {
  let messageBody = req.body.messageBody
  Message.create({
    messageBody
  })
  .then(g => res.json(g))
  .catch(console.error)
})

// Update 
router.put('/group', (req, res) => {
  let id = req.body._id
  let messageBody = req.body.messageBody
  console.log(req.body)
  Message.findOneAndUpdate(
    {_id: id},
    {
      messageBody
    },
    {new: true}
  )
  .then(g => res.json(g))
})

// Delete 
router.delete('/group', (req, res) => {
  const id = req.body._id 
  Message.findOneAndRemove({_id: id})
  .then(g => res.json(g))
  .catch(console.error)
})

module.exports = router