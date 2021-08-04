const mongoose = require('../db/connection')

const MessageSchema = new mongoose.Schema(
    {
        messageBody: String,
    }
)

const GroupSchema = new mongoose.Schema(
    {
        messages: [MessageSchema],
        interest: String
    }
)

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group