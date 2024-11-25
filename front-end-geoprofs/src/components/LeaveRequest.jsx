function LeaveRequest (props){
    return(
        <a href={"/leave-request?id="+props.id}>
            {props.name} Leave Request
        </a>
    )
}

export default LeaveRequest