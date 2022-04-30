const router = require('express').Router();

const {
    getThoughts,
    getThoughtsByID,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');