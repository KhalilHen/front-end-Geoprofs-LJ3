import { Outlet, Link } from "react-router-dom";
import Arrow from '../images/icons/arrow.png';

function LeaveRequest (props){
    return(
        <Link className=" flex flex-row w-full h-[100px] border-solid border-[#A7A7A7] border-[1px] my-[5px]">
            <div className="flex flex-1 h-full flex-col">
                <div className="w-full] h-[25%] bg-[#ff0000]">{props.title}</div>
                <div className="w-full] h-[25%] bg-[#ffff00]">{props.timeframe}</div>
                <div className="w-full] h-[25%] bg-[#00ff00]">{props.catagory}</div>
                <div className="w-full] h-[25%] bg-[#ff00ff]">{props.status}</div>
            </div>
            <div className="w-[40px] h-fill items-end flex">
                <img src={Arrow} alt="" />
            </div>
        </Link>
    )
}

export default LeaveRequest