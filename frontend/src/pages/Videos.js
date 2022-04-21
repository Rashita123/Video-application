import { useEffect, useState } from 'react';
import { incrementLike, incrementDislike, getVideos } from '../api/videosApi';
import { Link } from "react-router-dom";

export const Videos = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos(setVideos);
    },[])

    return(
        <div>
            Videos
            <ul>
            {
                videos.map(video => (
                    <li>
                        <div>
                            <Link to={`/${video.id}`}>{video.title}</Link>
                            <button onClick={() => incrementLike(videos, video.id)}>likes: {video.likes}</button><br/>
                            <button onClick={() => incrementDislike(videos, video.id)}>dislikes: {video.dislikes}</button>
                            <hr/>
                        </div>
                    </li>
                ))
            } 
            </ul>
            
        </div>
    )
}