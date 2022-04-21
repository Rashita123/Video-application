import { useParams } from "react-router-dom"

export const Video = () => {
    const  { id } = useParams();
    
    return(
        <div>
            Each single video content displays here
        </div>
    )
}