const mongoose = require('../db/connection')

const MessageSchema = new mongoose.Schema(
  {
    messageBody: String
  }
)

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message