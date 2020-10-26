const express = require('express');

const router = express.Router();

const controller = require('../controllers/scream.controller');
const fbAuth = require('../middlewares/fbAuth.middleware');
const { route } = require('./user.route');

router.get('/', controller.index);
router.get('/:screamId', controller.show);
router.post('/', fbAuth , controller.store);
router.post('/:screamId/comment', fbAuth , controller.comment);
router.get('/:screamId/like', fbAuth , controller.like);
router.get('/:screamId/unlike', fbAuth , controller.unlike);
router.delete('/:screamId', fbAuth , controller.destroy);


module.exports = router;
