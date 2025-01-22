import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import Option from './Option';
import moment from 'moment';
import Header from './Header';

function LeaveRequestPage(){

    //temp
    const leaveRequests = [//temporary
        {
            id: 1,
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: "Pending",
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
            leave_status: "Pending",
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
            leave_status: "Accepted",
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
            leave_status: "Denied",
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
        },
    ];

    

    const [searchParams] = useSearchParams();
    const [todos, setTodos] = useState([]);

    const queryParams = new URLSearchParams(location.search);
    const id = Number(queryParams.get('id')); //id of leaverequest in data base should not be 0 or lower

    var currentRequest = leaveRequests.find(leaveRequest => leaveRequest.id == id);

    //id prop should be used if viewing a leave request, NOT while making one than it will be 0
  
    // useEffect(() => {
    //   fetch("")
    //     .then((response) => response.json())
    //     .then((json) => setTodos(json.actual.stationmeasurements));
    // }, []);
  
    // const leaveRequestData = todos.find((station) => station.$id == id);


    //todo: when entering page, check if user is a manager/has perms to be here.

    const [Category, setCategory] = useState(-1); //Category id
    const [startDate, setStartDate] = useState(moment().startOf("day"));
    const [endDate, setEndDate] = useState(moment().startOf("day"));
    const [paidLeave, setPaidLeave] = useState("off");
    const [text, setText] = useState("");

    function handleChangeCategory(e){
        setCategory(e.target.value);
    };

    function home(){
        window.location.href = "/front-page";
    }

    function handleChangeText(e){
        setText(e.target.value);
    };

    function handlePaidLeaveChange(e){
        setPaidLeave(e.target.checked ? "on" : "off");
    };

    const startPickDate = (e) => {
        const time = e.target.value;
        const [year , month , day] = time.split("-");
        const tempDate = moment(startDate).year(year).month(month-1).date(day);
        setStartDate(tempDate);
    };

    const endPickDate = (e) => {
        const time = e.target.value;
        const [year , month , day] = time.split("-");
        const tempDate = moment(endDate).year(year).month(month-1).date(day);
        setEndDate(tempDate);
    };

    const changeStartTime = (e) => {
        const time = e.target.value;
        const [hour , minute] = time.split(":");
        const tempDate = moment(startDate).hour(hour).minute(minute);
        setStartDate(tempDate);
    };

    const changeEndTime = (e) => {
        const time = e.target.value;
        const [hour , minute] = time.split(":");
        const tempDate = moment(endDate).hour(hour).minute(minute);
        setEndDate(tempDate);
    };

    const startDateValue = () => {
        if (id > 0) {
            var timeAndDate = currentRequest.start_date;
  
            const timeAndDateArray = timeAndDate.toString().split(", ");

            const myMomentObject = moment(timeAndDateArray[0], 'YYYY-MM-DD')
    
            return myMomentObject.format('YYYY-MM-DD')
        } else {
            return moment(startDate).format('YYYY-MM-DD');
        }
    };

    const endDateValue = () => {
        if (id > 0) {
            var timeAndDate = currentRequest.end_date;
    
            const timeAndDateArray = timeAndDate.toString().split(", ");
    
            const myMomentObject = moment(timeAndDateArray[0], 'YYYY-MM-DD')

            return myMomentObject.format('YYYY-MM-DD')
        } else {
            return moment(endDate).format('YYYY-MM-DD');
        }
    };

    var locked = "";

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

    if(id > 0){
        locked = "disabled";

        //to do get data and setCategory(), setStartDate(), setEndDate. (check if user has rights to view data in backend)
        //if user doesn't have rights do window.location.href = "/front-page";

        if(true){
            //to do check if leave request is viewed by correct manger that can accept/decline and leave request is not already accepted or declined 
        }
    }

    const buttons = () =>{
        if(id > 0 && currentRequest.employee_id == temp.userId){
            return(
                <div className='mt-[20px] w-[500px] justify-left h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={home}>terug</button>
                </div>
            )
        }
        else if(id > 0 && currentRequest.employee_id != temp.userId){
            return(
                <div className='mt-[20px] w-[500px] justify-between h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full'>afwijzen</button>
                    <button className='w-[150px] h-[40px] rounded-full bg-[#ff0000] text-white'>Cancel</button>
                    <button className='w-[150px] h-[40px] rounded-full bg-[#20B5FF] text-white'>accepteer</button>
                </div>
            )
        }
        else{
            return(
                <div className='mt-[20px] w-[500px] justify-between h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={home}>terug</button>
                    <button className='w-[150px] h-[40px] rounded-full bg-[#20B5FF] text-white'>dien in</button>
                </div>
            )
        }
    };

    console.log(currentRequest);

    return(
        <>
            <Header/>
            <div className='w-full h-[calc(100vh-140px)] p-[50px] flex-col flex'>
                <div>
                    <p>Catagorie</p>
                    {id > 0 ?
                        <select className='h-[40px] w-[500px] border-solid border-[#A7A7A7] border-[1px]' name="category" id="category" onChange={handleChangeCategory} disabled={locked}>
                            <option value="">{currentRequest.leave_requests_category_id}</option>
                        </select>
                        :
                        <select className='h-[40px] w-[500px] border-solid border-[#A7A7A7] border-[1px]' name="category" id="category" onChange={handleChangeCategory} disabled={locked}>
                            <option value="" disabled selected hidden>Kies een Catagorie</option>
                            <option>Ziek</option>
                            <option>Vakantie</option>
                        </select>
                    }
                </div>
                <div className='h-auto w-[600px] mt-[20px] flex'>
                    <div className='h-[50px] w-full'>
                        <p>start datum</p>
                        <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                            <input 
                                className="w-[200px] h-[30px] border-solid border-[#A7A7A7] border-[1px] text-center " 
                                type="date" 
                                value={startDateValue()}
                                onChange={startPickDate}
                                disabled={locked}
                            />
                        </div>
                    </div>
                    <div className='h-[50px] w-full'>
                        <p>eind datum</p>
                        <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                        <input 
                            className="w-[200px] h-[30px] border-solid border-[#A7A7A7] border-[1px] text-center " 
                            type="date" 
                            value={endDateValue()}
                            onChange={endPickDate}
                            disabled={locked}
                        />
                        </div>
                    </div>
                </div>

                <div className='h-auto w-[600px] mt-[20px] flex'>
                    <div className='h-[50px] w-full'>
                        <p>start tijd</p>
                        <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                            <input className="w-[200px] h-[30px] border-solid border-[#A7A7A7] border-[1px] text-center "  type="time" onChange={changeStartTime} value={startDate.format('HH:mm')} disabled={locked}/>
                            {/* to do should be in intervals of 30 min */}
                        </div>
                    </div>
                    <div className='h-[50px] w-full'>
                        <p>eind tijd</p>
                        <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                        <input className="w-[200px] h-[30px] border-solid border-[#A7A7A7] border-[1px] text-center " type="time" onChange={changeEndTime} value={endDate.format('HH:mm')} disabled={locked}/>
                        {/* to do should be in intervals of 30 min */} 
                        </div>
                    </div>
                </div>

                <div>
                    <input className='mt-[20px]' type="checkbox" checked={paidLeave == "on"} onChange={handlePaidLeaveChange} disabled={locked}/> betaalt Verlof
                </div>

                <textarea placeholder='placeholder' className="mt-[20px] p-[5px] w-[500px] h-[300px] border-solid border-[#A7A7A7] border-[1px] " cols="30" rows="10" onChange={handleChangeText} value={text} disabled={locked}></textarea>

                {/* to do buttons should send correct data to backend (backend also should check if user has rights for what he send) */}
                {buttons()}
            </div>
        </>
    )
}

export default LeaveRequestPage