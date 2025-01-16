import Arrow from '../images/icons/arrow.png';
import { Link } from "react-router-dom";

function LeaveRequest (props){
    return(
        <Link to={{pathname: `/leave-request`, search: `?id=` + props.id}} className=" flex flex-row w-full h-[100px] border-solid border-[#A7A7A7] border-[1px] my-[5px]">
            <div className="flex flex-1 h-full flex-col">
                <div className="w-full] h-[25%]">{props.title}</div>
                <div className="w-full] h-[25%]">{props.timeframe}</div>
                <div className="w-full] h-[25%]">{props.catagory}</div>
                <div className="w-full] h-[25%]">{props.status}</div>
            </div>
            <div className="w-[40px] h-fill items-end flex">
                <img src={Arrow} alt="" />
            </div>
        </Link>
    )
}

export default LeaveRequest