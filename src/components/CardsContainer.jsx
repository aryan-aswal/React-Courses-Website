import Course from "./course"
function CardContainer(props) {
    let Courses = props.courses;
    return (
        <div className="card-container">
            {
                Courses.map(obj=>{
                    return <Course key = {obj.id} course = {obj}/>
                })
            }
        </div>
    )
}
export default CardContainer;