// GET Videos
// /api/videos

let videos = [
    {
        id:1,
        title: "Using 'new' keyword in javascript",
        likes:2,
        dislikes:1,
    },
    {
        id:2,
        title: "Promises in javascript",
        likes:4,
        dislikes:2,
    },
    {
        id:3,
        title: "Asynchronous javascript",
        likes:7,
        dislikes:3,
    }
]
const getVideos = (req, res) => {
    res.status(200).json({"videos": videos});
}



const getVideoById = (req, res) => {
    const { id } = req.params;
    const video = videos.find(video => video.id === parseInt(id));
    res.status(200).json({"video": video})
}


const updateVideoById = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const video = videos.find(video => video.id === parseInt(id))
    const index = videos.indexOf(video);
    for(let key in body){
        video[key] = body[key];
    }
    res.status(200).json({"video": video});
}

const deleteVideoById = (req, res) => {
    const { id } = req.params;
    const video = videos.find(video => video.id === parseInt(id));
    const index = videos.indexOf(video);
    const deletedVideo = videos.splice(index, 1);
    res.status(200).json({"video" : deletedVideo});
}

module.exports = {
    getVideos,
    getVideoById,
    updateVideoById,
    deleteVideoById,
}