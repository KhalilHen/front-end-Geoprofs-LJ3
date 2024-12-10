import React, { useState } from 'react';
import Option from './Option';
import LeaveRequest from './LeaveRequest';
import Header from './Header';

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
    <>  
        <Header/>
        <div className="w-full h-[calc(100vh-160px)] my-[10px] flex">
            <div class="h-full flex-1 flex items-center flex-col">
                <p className='text-lg'>Uw open verlof aanvragen</p>
                <div className='h-full w-[80%]'>
                <div></div>
                </div>
            </div>

            <div class="h-full flex-1 flex items-center flex-col border-solid border-[#EBEBEB] border-r-[2px] border-l-[2px]">
                <p className='text-lg'>Geschidenis</p>
                <div className='h-full w-[80%]'>
                    <select placeholder='Catagorie' className='w-full h-[30px] border-solid border-[#A7A7A7] border-[1px]' name="category" id="category" onChange={handleChangeCategory}>
                    <option value="" disabled selected hidden>Catagorie</option>
                    <option>Male</option>
                    <option>Female</option>
                    </select>
                <div></div>
                </div>
            </div>
            {true? 
            <div class="h-full flex-1 flex items-center flex-col">
                <p className='text-lg'>Open verlog aanvragen</p>
                <div className='h-full w-[80%]'>
                <input placeholder='Name' className='w-full h-[30px] border-solid border-[#A7A7A7] border-[1px]' type="text" id="search" name="search" onChange={handleChangeName}></input>
                <div></div>
                </div>
            </div>
            :
            <div class="h-full flex-1 flex items-center flex-col"></div>
            }
        </div>

        {/* <div className="w-full h-[calc(100vh-140px)] flex">
            <div class="flex flex-1 h-full bg-[#ff0000] justify-center">
                <p className='m-4 text-lg'>Your Open Requests</p>
                
                <div>
                    {leaveOpenRequests.map(leaveRequest => {            
                        return(
                            <div class="flex">
                                <LeaveRequest name={leaveRequest.userName} id={leaveRequest.userId}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div class="flex-1 h-full bg-[#00ff00]">
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
                                <div class="flex">
                                    <LeaveRequest name={leaveRequest.userName} id={leaveRequest.userId}/>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>


            <div class="flex-1 h-full bg-[#0000ff]">
                Leave Requests
                <input type="text" id="search" name="search" onChange={handleChangeName}></input>
                {leaveRequestsMain.map(leaveRequest => {
                    if (search == "" || leaveRequest.userName.toLowerCase().includes(search.toLocaleLowerCase())){
                        return(
                            <div class="flex">
                                <LeaveRequest name={leaveRequest.userName} id={leaveRequest.userId}/>
                            </div>
                        )
                    }
                })}
            </div>
        </div> */}
    </>
    )
}

export default InboxPage