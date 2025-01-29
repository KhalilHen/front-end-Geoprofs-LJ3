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

    const leaveRequests = [//temporary
        {
            id: 1,
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: 0,
            employee_id: 2,
            categoryId: 0,
            Name: "John",
        },
        {
            id: 2,
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: 0,
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
        },
        {
            id: 3,
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: 2,
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
        },
        {
            id: 4,
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: 1,
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
        },
    ];

    return(
    <>  
        <Header/>
        <div className="w-full h-[calc(100vh-160px)] my-[10px] flex">
            <div class="h-full flex-1 flex items-center flex-col">
                <p className='text-lg'>Uw open verlof aanvragen</p>
                <div className='h-full w-[80%]'>
                    <div>
                    {leaveRequests.map(leaveRequest => {       
                        if(leaveRequest.leave_status == "Pending" && leaveRequest.employee_id == temp.userId){
                            // console.log(leaveRequest.id);
                            return(
                                <div className="flex">
                                    <LeaveRequest
                                    title={"Leave Request"}
                                    timeframe={leaveRequest.start_date + " - " + leaveRequest.end_date}
                                    catagory={leaveRequest.leave_requests_category_id}
                                    status={leaveRequest.leave_status}
                                    id={leaveRequest.id}/>
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
                    {leaveRequests.map(leaveRequest => {
                        if((leaveRequest.leave_status == 2 || leaveRequest.leave_status == 1) && leaveRequest.employee_id == temp.userId){
                            // if (filter == -1 || filter == leaveRequest.leave_requests_category_id){
                                return(
                                    <div className="flex">
                                    <LeaveRequest
                                        title={"Leave Request"}
                                        timeframe={leaveRequest.start_date + " - " + leaveRequest.end_date}
                                        catagory={leaveRequest.leave_requests_category_id}
                                        status={leaveRequest.leave_status}
                                        id={leaveRequest.id}/>
                                    </div>
                                )
                            }
                        // }
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

                {leaveRequests.map(leaveRequest => {     
                    if(leaveRequest.leave_status == 0 && leaveRequest.employee_id != temp.userId){ //kom er later op terug
                        if (search == "" || leaveRequest.Name.toString().toLowerCase().includes(search.toString().toLowerCase())){
                            return(
                                <div className="flex">
                                    <LeaveRequest
                                    title={leaveRequest.Name + " Requested Leave"}
                                    timeframe={leaveRequest.start_date + " - " + leaveRequest.end_date}
                                    catagory={leaveRequest.leave_requests_category_id}
                                    status={leaveRequest.leave_status}
                                    id={leaveRequest.id}/>
                                </div>
                            )
                        }
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