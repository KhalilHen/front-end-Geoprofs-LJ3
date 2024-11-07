import React, { useState } from 'react';
import HeaderNormal from './HeaderNormal';
import Option from './Option';
import moment from 'moment';

function LeaveRequestPage(){

    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get('id'); //id of user

    const [Category, setCategory] = useState(-1); //Category id
    const [startDate, setStartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDay(),
    ));
    const [endDate, setEndDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDay(),
    ));

    function handleChangeCategory(e){
        setCategory(e.target.value);
    };

    const startPickDate = (e) => {
;
    };

    const endPickDate = (e) => {

    };

    const changeStarttime = (e) => {

    };

    return(
        <>
            <HeaderNormal/>
            <div>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <Option name="noChosen" id="-1"/> {/* these options are temporary */}
                    <Option name="0" id="0"/>
                    <Option name="1" id="1"/>
                    <Option name="2" id="2"/>
                </select>
                <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                    <input 
                        className="w-full h-[30px] border-solid border-[#A7A7A7] border-[0px] border-t-[1px] text-center" 
                        type="date" 
                        value={moment(startDate).format('YYYY-MM-DD')}
                        onChange={startPickDate}
                    />
                </div>
                <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                    <input 
                        className="w-full h-[30px] border-solid border-[#A7A7A7] border-[0px] border-t-[1px] text-center" 
                        type="date" 
                        value={moment(endDate).format('YYYY-MM-DD')}
                        onChange={endPickDate}
                    />
                </div>
                <div>
                    {/* <input type="time" onChange={changeStarttime} value={startDate.getHours()+":"+startDate.getMinutes()}/> */}
                </div>
            </div>
        </>
    )
}

export default LeaveRequestPage