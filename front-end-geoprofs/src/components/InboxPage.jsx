import React, { useState } from 'react';
import Option from './Option';
import LeaveRequest from './LeaveRequest';

function InboxPage(){

    const [filter, setFilter] = useState(-1);
    const [search, setSearch] = useState("");

    function handleChangeCategory(e){
        setFilter(e.target.value);
    }

    function handleChangeName(e){
        setSearch(e.target.value);
    }


    const leaveOpenRequests = [//temporary
        {
            userName: "AAA",
            userId: 0,
            categoryId: 0
        },
        {
            userName: "BBB",
            userId: 1,
            categoryId: 1
        },
        {
            userName: "CCC",
            userId: 2,
            categoryId: 2
        }
    ];

    const leaveRequestsHistory = [//temporary
        {
            userName: "DDD",
            userId: 3,
            categoryId: 0
        },
        {
            userName: "EEE",
            userId: 4,
            categoryId: 1
        },
        {
            userName: "FFF",
            userId: 5,
            categoryId: 2
        }
    ];

    const leaveRequestsMain = [//temporary
        {
            userName: "GGG",
            userId: 6,
            categoryId: 0
        },
        {
            userName: "HHH",
            userId: 7,
            categoryId: 1
        },
        {
            userName: "III",
            userId: 8,
            categoryId: 2
        }
    ];

    return(
    <div class="flex flex-row">
        <div class="flex-1">
            Your Open Requests
            <div>
                {leaveOpenRequests.map(leaveRequest => {            
                    return(
                        <div class="flex colum">
                            <LeaveRequest name={leaveRequest.userName} id={leaveRequest.userId}/>
                        </div>
                    )
                })}
            </div>
        </div>

        <div class="flex-1">
            History
            <select name="category" id="category" onChange={handleChangeCategory}>
                <Option name="noChosen" id="-1"/>
                <Option name="0" id="0"/>
                <Option name="1" id="1"/>
                <Option name="2" id="2"/>
            </select>
            <div>
                {leaveRequestsHistory.map(leaveRequest => {
                    if (filter == -1 || filter == leaveRequest.categoryId){
                        return(
                            <div class="flex colum">
                                <LeaveRequest name={leaveRequest.userName} id={leaveRequest.userId}/>
                            </div>
                        )
                    }
                })}
            </div>
        </div>


        <div class="flex-1">
            Leave Requests
            <input type="text" id="search" name="search" onChange={handleChangeName}></input>
            {leaveRequestsMain.map(leaveRequest => {
                if (search == "" || leaveRequest.userName.toLowerCase().includes(search.toLocaleLowerCase())){
                    return(
                        <div class="flex colum">
                            <LeaveRequest name={leaveRequest.userName} id={leaveRequest.userId}/>
                        </div>
                    )
                }
            })}
        </div>
    </div>
    )
}

export default InboxPage