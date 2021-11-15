import Description from "./description/description";
import DueDate from "./dueDate/dueDate";
import Estimation from "./estimation/estimation";
import Summary from "./summary/summary";
import Tags from "./tags/tags";
import TaskKey from "./TaskKey/TaskKey";

const Card = ({task}) => {
    let estimateTime = task.fields.timeoriginalestimate/(40*3600)
    let cardWidth = estimateTime <= 1 ? '200px' : `${200+20*estimateTime}px`
    
    return ( 
        <div style={{width:cardWidth}} className='card p-2 rounded-md h-full bg-yellow-400 m-2 relative flex flex-col'>
            <TaskKey tasKey={task.key} />
            <Summary summary = {task.fields.summary}/>            
            <Description description={task.fields.description}/>
            <Estimation estimation= {task.fields.timetracking.originalEstimate}/>
            <DueDate duedate = {task.fields.duedate}/>
            <Tags labels={task.fields.labels}/>
        </div>
     );
}
 
export default Card;