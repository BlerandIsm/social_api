const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [({ length }) => length > 0 && length <= 280, 'Toughts should contain 1 to 280 characters']
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat (createdAtVal)
        },
        reactions: [reactionSchema],
    },
    {
        toJSON:{
            getters:true,
            virtuals: true
        }
    }
);
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;