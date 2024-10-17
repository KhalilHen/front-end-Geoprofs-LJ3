import CalanderRow from "./CalanderRow";
import React, { useState } from 'react';
import moment from 'moment';

import 'flowbite/dist/flowbite.min.css';

function FrontPage() {

    const [date, setDate] = useState(new Date());
    const [weekNumber, setWeekNumber] = useState(moment().isoWeek());
    const [weekDates, setWeekDates] = useState([7]);
  
    const PickDate = (event) => {
      const selectedDate = new Date(event.target.value);
      setDate(selectedDate);
      setWeekNumber(moment(selectedDate).isoWeek());
      getSelectedWeekDates(selectedDate);
    };
  
    const NextWeek = () => {
      const newDate = moment(date).add(7, 'days').toDate();
      setDate(newDate);
      setWeekNumber(moment(newDate).isoWeek());
      getSelectedWeekDates(newDate);
    };
  
    const LastWeek = () => {
      const newDate = moment(date).subtract(7, 'days').toDate();
      setDate(newDate);
      setWeekNumber(moment(newDate).isoWeek());
      getSelectedWeekDates(newDate);
    };

    const getSelectedWeekDates = (selectedDate) => {
        const weekDates= []; 
      
        for (var i = 1; i <= 7; i++) {
          weekDates.push(moment(selectedDate).day(i)); 
        }

        weekDates.forEach(function(date){ console.log(date.format("L"));});
      
        return weekDates; 
      }
      


    return (
    <div className="w-full h-[calc(100vh-140px)] flex">
        <div className="w-4/5 h-full">
            <div className="w-full h-[200px]">
                <div className="w-full h-1/2 flex">
                    <div className="w-1/4 h-ful"></div>
                    <div className="w-3/4 h-full flex">
                        <div className="h-full w-[calc((100%/14)*3)]"></div>
                        <div className="h-full w-[calc((100%/14)*3)] flex flex-col-reverse">
                            <button onClick={LastWeek} className="w-full h-[30px] bg-[#20B5FF] rounded-tl-[15px] text-white">Last Week</button>
                        </div>
                        <div className="h-full w-[calc(100%/7)] flex flex-col">
                            <div className="h-1/2 w-full flex flex-col-reverse ">
                                <p className="text-2xl text-center">Week {weekNumber}</p>
                            </div>
                            <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                                <input 
                                    className="w-full h-[30px] border-solid border-[#A7A7A7] border-[0px] border-t-[1px]" 
                                    type="date" 
                                    value={moment(date).format('YYYY-MM-DD')}
                                    onChange={PickDate}
                                />
                            </div>
                        </div>
                        <div className="h-full w-[calc((100%/14)*3)] flex flex-col-reverse">
                        <button onClick={NextWeek} className="w-full h-[30px] bg-[#20B5FF] rounded-tr-[15px] text-white">Next Week</button>
                        </div>
                        <div className="h-full w-[calc((100%/14)*3)]"></div>

                    </div>
                </div>
                <div className="w-full h-1/2 flex">
                    <div className="w-1/4 h-full content-center">
                    <form className="justify-center flex" action="">
                        <input className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px]" type="text" />
                    </form>
                    </div>
                    <div className="w-3/4 h-full flex">
                        <table className="h-full w-full">
                            <tr className="h-full w-full">
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Maandag</td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Dinsdag</td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Woensdag</td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Donderdag</td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Vrijdag</td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Zaterdag</td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-2xl text-center">Zondag</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-full h-[calc(100vh-340px)] overflow-y-scroll scrollbar-hide">
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>
                <CalanderRow/>

                
            </div>
        </div>
        <div className="w-1/5 h-full bg-[#00FF00]">
        <div className="w-full h-[100px] bg-[#FF00FF]"></div>
        </div>
    </div>
    )
  }
  
  export default FrontPage
  