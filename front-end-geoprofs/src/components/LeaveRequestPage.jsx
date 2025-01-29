import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import moment from 'moment';
import Header from './Header';
import { CreateLeaveRequest } from "./CreateLeaveRequest";

function LeaveRequestPage(){

    const leaveRequests = [//temporary
        {
            id: 1,
            description: "Test Leave Request 1",
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: "Pending",
            employee_id: 2,
            categoryId: 0,
            Name: "John",
            is_paid: true,
        },
        {
            id: 2,
            description: "Test Leave Request 2",
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: "Pending",
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
            is_paid: true,
        },
        {
            id: 3,
            description: "Test Leave Request 3",
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: "Accepted",
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
            is_paid: false,
        },
        {
            id: 4,
            description: "Test Leave Request 4",
            Title: "AAA",
            start_date: "2020-01-01, 10:30",
            end_date: "2020-01-05, 16:30",
            leave_requests_category_id: "Ziek",
            leave_status: "Denied",
            employee_id: 1,
            categoryId: 0,
            Name: "Woud",
            is_paid: false,
        },
    ];

    const queryParams = new URLSearchParams(location.search);
    const id = Number(queryParams.get('id')); //id of leaverequest in data base should not be 0 or lower
    //id prop should be used if viewing a leave request, NOT while making one than it will be 0

    //todo: when entering page, check if user is a manager/has perms to be here.

    // const [todos, setTodos] = useState([]);
  
    // useEffect(() => {
    //   fetch("link to backend")
    //     .then((response) => response.json())
    //     .then((json) => setTodos(set the path in the json of the data you want));
    // }, []);
  
    // const leaveRequests = todos.find((leaveRequest) => leaveRequest.id == id);
    var currentRequest = leaveRequests.find(leaveRequest => leaveRequest.id == id);

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

    const [Category, setCategory] = useState(-1); //Category id
    const [startDate, setStartDate] = useState(moment().startOf("day"));
    const [endDate, setEndDate] = useState(moment().startOf("day"));
    const [paidLeave, setPaidLeave] = useState(true);
    const [text, setText] = useState("");

    var locked = "";

    function handleChangeCategory(e){
        setCategory(e.target.value);
    };

    function home(){
        window.location.href = "/front-page";
    }

    function back(){
        window.location.href = "/inbox";
    }
    
    function handleChangeText(e){
        setText(e.target.value);
    };

    function handlePaidLeaveChange(e){
        setPaidLeave(e.target.checked ? true : false);
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

const dateOrTimeValue = (startOrEnd, format) => {
    if (id > 0) {
        var timeAndDate;
        if(startOrEnd == "start"){
            timeAndDate = currentRequest.start_date;
        }
        else{
            timeAndDate = currentRequest.end_date;
        }
        const timeAndDateArray = timeAndDate.toString().split(", ");
        var dateOrTime;
        if(format == "HH:mm"){
            dateOrTime = 1;
        }
        else{
            dateOrTime = 0;
        }
        const myMomentObject = moment(timeAndDateArray[dateOrTime], format)
        return myMomentObject.format(format)
    } else {
        if(startOrEnd == "start"){
            return moment(startDate).format(format);
        }
        else{
            return moment(endDate).format(format);
        }
    }
};

    const isPaidLeaveChecked = () => {
        if (id > 0) {
            return currentRequest.is_paid;
        }
        else{
            return paidLeave;
        }
    }

    const isTextSet = () => {
        if (id > 0) {
            return currentRequest.description;
        }
        else{
            return text;
        }
    }

    const buttons = () =>{
        //to do buttons should send correct data to backend (backend also should check if user has rights for what he send)
        if(id > 0 && currentRequest.employee_id == temp.userId){
            return(
                <div className='mt-[20px] w-[500px] justify-left h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={back}>Terug</button>
                </div>
            )
        }
        else if(id > 0 && currentRequest.employee_id != temp.userId){
            return(
                <div className='mt-[20px] w-[500px] justify-between h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={back}>Terug</button>
                    <button className='w-[150px] h-[40px] rounded-full bg-[#ff0000] text-white'>Afwijzen</button>
                    <button className='w-[150px] h-[40px] rounded-full bg-[#20B5FF] text-white'>Accepteer</button>
                </div>
            )
        }
        else{
            return(
                <div className='mt-[20px] w-[500px] justify-between h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={home}>Terug</button>
                    <button id="SubmitLeaveRequestButton" onClick={ActivateCreateLeaveRequest} className='w-[150px] h-[40px] rounded-full bg-[#20B5FF] text-white'>Dien in</button>
                </div>
            )
        }
    };

    if(id > 0){
        locked = "disabled";

        //to do: check if user has rights to view data in backend
        //if user doesn't have rights do window.location.href = "/front-page";

        if(true){
            //to do check if leave request is viewed by correct manger that can accept/decline and leave request is not already accepted or declined 
        }
    }

    async function ActivateCreateLeaveRequest(){
        const input = {
            description: text, 
            // categoryId: Category, 
            categoryId: 1, 
            startDate: moment(startDate).format('YYYY-MM-DD'),
            endDate: moment(endDate).format('YYYY-MM-DD'), 
            isPaid: paidLeave
        };

        await CreateLeaveRequest(input);
        home();
    }

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
                                value={dateOrTimeValue("start", "YYYY-MM-DD")}
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
                            value={dateOrTimeValue("end", "YYYY-MM-DD")}
                            onChange={endPickDate}
                            disabled={locked}
                        />
                        </div>
                    </div>
                </div>

                <div className='h-auto w-[600px] mt-[20px] flex'>
                    {/* <div className='h-[50px] w-full'>
                        <p>start tijd</p>
                        <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                            <input className="w-[200px] h-[30px] border-solid border-[#A7A7A7] border-[1px] text-center "  type="time" onChange={changeStartTime} value={dateOrTimeValue("start", "HH:mm")} disabled={locked}/>
                            {
                            //to do should be in intervals of 30 min
                            }
                        </div>
                    </div>
                    <div className='h-[50px] w-full'>
                        <p>eind tijd</p>
                        <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                            <input className="w-[200px] h-[30px] border-solid border-[#A7A7A7] border-[1px] text-center " type="time" onChange={changeEndTime} value={dateOrTimeValue("end", "HH:mm")} disabled={locked}/>
                            {
                            // to do should be in intervals of 30 min
                            } 
                        </div>
                    </div> */}
                </div>

                <div>
                    <input className='mt-[20px]' type="checkbox" checked={isPaidLeaveChecked()} onChange={handlePaidLeaveChange} disabled={locked}/> betaalt Verlof
                </div>

                <textarea placeholder='placeholder' className="mt-[20px] p-[5px] w-[500px] h-[300px] border-solid border-[#A7A7A7] border-[1px] " cols="30" rows="10" onChange={handleChangeText} value={isTextSet()} disabled={locked}></textarea>

                {buttons()}
            </div>
        </>
    )
}

export default LeaveRequestPage