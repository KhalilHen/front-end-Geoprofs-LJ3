import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import moment from 'moment';
import Header from './Header';
import { CreateLeaveRequest } from "./CreateLeaveRequest";
import { ApproveOrDeclineLeaveRequest } from "./ApproveOrDeclineLeaveRequest";
import { GetLeaveRequestData } from "./GetLeaveRequestData"


function LeaveRequestPage(){
    const queryParams = new URLSearchParams(location.search);
    const id = Number(queryParams.get('id')); //id of leaverequest in data base should not be 0 or lower
    
    const [data, setData] = useState();
    const [response, setResponse] = useState();

    console.log('Component rendering');

    useEffect(()=> {
        async function fetchData() {
            await GetLeaveRequestData(id, setData, null, setResponse);
        }
        fetchData();
        setData(data);
    }, []);

    console.log(data?.leave_request);

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
            timeAndDate = data?.leave_request.start_date;
        }
        else{
            timeAndDate = data?.leave_request.end_date;
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
            return data?.leave_request.is_paid;
        }
        else{
            return paidLeave;
        }
    }

    const isTextSet = () => {
        if (id > 0) {
            return data?.leave_request.description;
        }
        else{
            return text;
        }
    }

    const buttons = () =>{
        //to do buttons should send correct data to backend (backend also should check if user has rights for what he send)
        if(id > 0 && data?.leave_request.employee_id == temp.userId){
            return(
                <div className='mt-[20px] w-[500px] justify-left h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={back}>Terug</button>
                </div>
            )
        }
        else if(id > 0 && data?.leave_request.employee_id != temp.userId){
            return(
                <div className='mt-[20px] w-[500px] justify-between h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={back}>Terug</button>
                    <button onClick={() => ActivateApproveOrDeclineLeaveRequest(1)} className='w-[150px] h-[40px] rounded-full bg-[#ff0000] text-white'>Afwijzen</button>
                    <button onClick={() => ActivateApproveOrDeclineLeaveRequest(2)} className='w-[150px] h-[40px] rounded-full bg-[#20B5FF] text-white'>Accepteer</button>
                </div>
            )
        }
        else{
            return(
                <div className='mt-[20px] w-[500px] justify-between h-auto flex'>
                    <button className='w-[150px] h-[40px] border-solid border-[#A7A7A7] border-[1px] rounded-full' onClick={home}>Terug</button>
                    <button onClick={ActivateCreateLeaveRequest} className='w-[150px] h-[40px] rounded-full bg-[#20B5FF] text-white'>Dien in</button>
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

    function setCategoryData(){
        if (data?.leave_request.leave_requests_category_id == 1) {
            return "Vakantie";
        }
    }



    

    async function ActivateApproveOrDeclineLeaveRequest(acceptOrDeny){
        const input = {leave_request_id: data?.leave_request.id, value: acceptOrDeny};//value 2 is accept and value 1 would be decline 

        await ApproveOrDeclineLeaveRequest(input);
        home();
    }

    if(!data){
        return (
            <>
                loading...
            </>
        )
    }

    return(
        <>
            <Header/>
            <div className='w-full h-[calc(100vh-140px)] p-[50px] flex-col flex'>
                <div>
                    <p>Catagorie</p>
                    {id > 0 ?
                        <select className='h-[40px] w-[500px] border-solid border-[#A7A7A7] border-[1px]' name="category" id="category" onChange={handleChangeCategory} disabled={locked}>
                            <option value="">{setCategoryData()}</option>
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