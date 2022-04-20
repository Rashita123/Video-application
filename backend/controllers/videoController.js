// GET Videos
// /api/videos
const getVideos = (req, res) => {
    res.status(200).json({"message": "Yes yes gochitt!"});
}

module.exports = {
    getVideos,
}