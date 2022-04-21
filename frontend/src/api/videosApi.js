import axios from 'axios';

export const getVideos = (setVideos) => {
  axios.get("http://localhost:3000/api/videos")
    .then(res => {
      setVideos(res.data.videos);
   })
   .catch((error) => console.log(error))
}
export const incrementLike = (videos, id) => {
    const video = videos.find(video => video.id === parseInt(id));
    axios.put(`http://localhost:3000/api/videos/${id}`, {"likes": video.likes+1})
    .then((res) => console.log(res))
    .catch(err => console.log("error",err));
    
  }
export const incrementDislike = (videos, id) => {
    const video = videos.find(video => video.id === parseInt(id));
    axios.put(`http://localhost:3000/api/videos/${id}`, {"dislikes": video.dislikes+1})
    .then((res) => console.log(res))
    .catch(err => console.log("error",err));
  }