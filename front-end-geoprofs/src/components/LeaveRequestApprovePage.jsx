import React from 'react';


function LeaveRequestApprovePage(){

    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get('id'); //id of user

    return(
        <>
            {id}
        </>
    )
}

export default LeaveRequestApprovePage