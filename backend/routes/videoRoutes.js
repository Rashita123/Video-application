const express = require('express');
const router = express.Router();
const { getVideos } = require('../controllers/videoController');

router.route('/')
.get(getVideos)


module.exports = router;