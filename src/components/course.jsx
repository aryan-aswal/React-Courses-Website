import { useState } from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";
function Course(props) {
    const [like, setLike] = useState(false);
    function likeHandler() {
        if(!like) {
            setLike(true);
            toast.success("Liked Successfully")
        } else {
            setLike(false);
            toast.warning("Like removed")
        }
    }
    return (
        <div className="Card">
            <div className="card-image">
                <img src={props.course.image.url} alt="" />
                <div className="like-div" onClick={likeHandler}>
                    {
                        like ? (<FcLike fontSize="1.75rem"></FcLike>) : (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
                    }
                </div>
            </div>
            <div className="card-details">
                <h2 className="card-details-heading">{props.course.title}</h2>
                <p className="card-details-para">{props.course.description.length > 100 ? `${props.course.description.substring(0,100)}...` : props.course.description}</p>
            </div>
        </div>
    )
    
}
export default Course;