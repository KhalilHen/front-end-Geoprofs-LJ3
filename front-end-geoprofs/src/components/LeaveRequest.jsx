import { Outlet, Link } from "react-router-dom";

function LeaveRequest (props){
    return(
        <Link className=" flex flex-row w-full h-[100px] border-solid border-[#A7A7A7] border-[1px] my-[5px]">
            <div className="flex flex-1 h-full"></div>
            <div className="w-[40px] h-fill"></div>
        </Link>
    )
}

export default LeaveRequest