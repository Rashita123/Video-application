const express = require('express');
const router = express.Router();
const { getVideos, getVideoById, updateVideoById, deleteVideoById } = require('../controllers/videosController');

router.route('/')
.get(getVideos)

router.route('/:id')
.get(getVideoById)
.put(updateVideoById)
.delete(deleteVideoById)

module.exports = router;