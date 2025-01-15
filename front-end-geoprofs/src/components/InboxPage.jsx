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

    var temp = JSON.parse(getCookie("user"));

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }


    const leaveOpenRequests = [//temporary
        {
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "sick",
            leave_status: "pending",
            employee_id: 0,
            categoryId: 0
        },
        {
            Title: "BBB",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "sick",
            leave_status: "Accepted",
            employee_id: 1,
            categoryId: 0
        },
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
                <div>
                {leaveOpenRequests.map(leaveRequest => {       
                    if(leaveRequest.leave_status == "pending" && employee_id == temp.userId){
                        return(
                            <div class="flex">
                                <LeaveRequest title={"Leave Request"} timeframe={leaveRequest.start_date +  " - " + leaveRequest.end_date} catagory={leaveRequest.leave_requests_category_id} status={leaveRequest.leave_status} id={leaveRequest.userId}/>
                            </div>
                        )
                    }
                    })}
                </div>
                </div>
            </div>

            <div class="h-full flex-1 flex items-center flex-col border-solid border-[#EBEBEB] border-r-[2px] border-l-[2px]">
                <p className='text-lg'>Geschidenis</p>
                <div className='h-full w-[80%]'>
                    <select placeholder='Catagorie' className='w-full h-[30px] border-solid border-[#A7A7A7] border-[1px] mb-[5px]' name="category" id="category" onChange={handleChangeCategory}>
                    <option value="" disabled selected hidden>Catagorie</option>
                    <option>Ziek</option>
                    <option>Vakantie</option>
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
            </div>
            {true? 
            <div class="h-full flex-1 flex items-center flex-col">
                <p className='text-lg'>Open verlog aanvragen</p>
                <div className='h-full w-[80%]'>
                <input placeholder='Name' className='w-full h-[30px] border-solid border-[#A7A7A7] border-[1px] mb-[5px]' type="text" id="search" name="search" onChange={handleChangeName}></input>
                <div>
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
                </div>
            </div>
            :
            <div class="h-full flex-1 flex items-center flex-col"></div>
            }
        </div>
    </>
    )
}

export default InboxPage