const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody:{
            type: String,
            required: true,
            validate: [({ length }) => length <= 280, 'Reactions cant be more then 280 characters']
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dataFormat(createdAtVal)
        }
    }
)
module.exports = ReactionSchema; 