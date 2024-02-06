const router = require('express').Router();
const {
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    getThoughtById,
    addReaction,
    deleteReaction,
    updateReaction
} = require('../../controllers/thoughtController');

    router.route('/').get(getThoughts).post(createThought);
    router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
    router.route('/:thoughtId/reactions').post(addReaction);
    router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction).put(updateReaction);

module.exports = router;