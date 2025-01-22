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
    //id prop should be used if viewing a leave request, NOT while making one than it will be 0
  
    // useEffect(() => {
    //   fetch("")
    //     .then((response) => response.json())
    //     .then((json) => setTodos(json.actual.stationmeasurements));
    // }, []);
  
    const leaveRequestData = todos.find((station) => station.$id == id);




    //todo: when entering page, check if user is a manager/has perms to be here.


    
    var test = "disabled";

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

    var locked = "";
    var hiddenNonManger = "hidden";
    var hiddenViewing = "";

    if(id > 0){
        locked = "disabled";
        
        hiddenViewing = "hidden";

        //to do get data and setCategory(), setStartDate(), setEndDate. (check if user has rights to view data in backend)
        //if user doesn't have rights do window.location.href = "/front-page";

        if(true){//to do check if leave request is viewed by correct manger that can accept/decline and leave request is not already accepted or declined 
            hiddenNonManger = "";
        }
    }

    return(
        <>
            <Header/>
            <div>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <Option name="geen gekozen" id="-1"/> {/* these options are temporary */}
                    <Option name="0" id="0"/>
                    <Option name="1" id="1"/>
                    <Option name="2" id="2"/>
                </select>
                <br/>
                start datum
                <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                    <input 
                        className="w-full h-[30px] border-solid border-[#A7A7A7] border-[0px] border-t-[1px] text-center" 
                        type="date" 
                        value={moment(startDate).format('YYYY-MM-DD')}
                        onChange={startPickDate}
                        disabled={locked}
                    />
                </div>
                eind datum
                <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                    <input 
                        className="w-full h-[30px] border-solid border-[#A7A7A7] border-[0px] border-t-[1px] text-center" 
                        type="date" 
                        value={moment(endDate).format('YYYY-MM-DD')}
                        onChange={endPickDate}
                        disabled={locked}
                    />
                </div>
                start tijd
                <div>
                    <input type="time" onChange={changeStartTime} value={startDate.format('HH:mm')} disabled={locked}/>
                    {/* to do should be in intervals of 30 min */}
                </div>
                eind tijd
                <div>
                    <input type="time" onChange={changeEndTime} value={endDate.format('HH:mm')} disabled={locked}/>
                    {/* to do should be in intervals of 30 min */} 
                </div>
                <div>
                    <input type="checkbox" checked={paidLeave == "on"} onChange={handlePaidLeaveChange} disabled={locked}/> betaalt Verlof
                </div>
                <textarea cols="30" rows="10" onChange={handleChangeText} value={text} disabled={locked}></textarea>
                <div className="flex flex-col">
                    {/* to do buttons should send correct data to backend (backend also should check if user has rights for what he send) */}
                    <button hidden={hiddenViewing}>dien in</button>
                    <button hidden={hiddenNonManger}>accepteer</button>
                    <button hidden={hiddenNonManger}>afwijzen</button>
                    <button onClick={home}>terug</button>
                </div>
            </div>
        </>
    )
}

export default LeaveRequestPage