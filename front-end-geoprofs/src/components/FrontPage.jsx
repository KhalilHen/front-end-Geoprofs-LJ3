import CalanderRow from "./CalanderRow";
import React, { useState } from 'react';
import moment from 'moment';


function FrontPage() {

    const [date, setDate] = useState(new Date());
    const [weekNumber, setWeekNumber] = useState(moment().isoWeek());
    const [weekDates, setWeekDates] = useState([]);

    const [hideOrShowDepartmentsTab, setHideOrShowDepartmentsTab] = useState("0px");
    const [hideOrShowSectionsTab, setHideOrShowSectionsTab] = useState("0px");
    const [hideOrShowProjectsTab, setHideOrShowProjectsTab] = useState("0px");
  
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
        const weekDatesArray = [];
        const startOfWeek = moment(selectedDate).startOf('isoWeek');

        for (let i = 0; i < 7; i++) {
            weekDatesArray.push(startOfWeek.clone().add(i, 'days'));
        }

        setWeekDates(weekDatesArray);

        return weekDatesArray;
    }
      
    const ConvertMoment = (date) => {
        if(date){
           const newDate = date.format("DD-MM"); 
           return newDate;
        }
        else{
            getSelectedWeekDates(moment());
        }
    };


    const HandleDepartmentsTab = () => {
        if(hideOrShowDepartmentsTab == "0px"){
            setHideOrShowDepartmentsTab("200px")
            return;
        }
        else{
            setHideOrShowDepartmentsTab("0px")
            return;
        }
      };

      const HandleSectionsTab = () => {
        if(hideOrShowSectionsTab == "0px"){
            setHideOrShowSectionsTab("200px")
            return;
        }
        else{
            setHideOrShowSectionsTab("0px")
            return;
        }
      };

      const HandleProjectsTab = () => {
        if(hideOrShowProjectsTab == "0px"){
            setHideOrShowProjectsTab("200px")
            return;
        }
        else{
            setHideOrShowProjectsTab("0px")
            return;
        }
      };
    

    return (
    <div className="w-full h-[calc(100vh-140px)] flex">
        <div className="w-4/5 h-full">
            <div className="w-full h-[200px]">
                <div className="w-full h-1/2 flex">
                    <div className="w-1/4 h-ful"></div>
                    <div className="w-3/4 h-full flex">
                        <div className="h-full w-[calc((100%/14)*3)]"></div>
                        <div className="h-full w-[calc((100%/14)*3)] flex flex-col-reverse">
                            <button onClick={LastWeek} className="w-full h-[30px] bg-[#20B5FF] rounded-tl-[15px] text-white">Vorige Week</button>
                        </div>
                        <div className="h-full w-[calc(100%/7)] flex flex-col">
                            <div className="h-1/2 w-full flex flex-col-reverse ">
                                <p className="text-2xl text-center">{"week " + weekNumber}</p>
                            </div>
                            <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                                <input 
                                    className="w-full h-[30px] border-solid border-[#A7A7A7] border-[0px] border-t-[1px] text-center" 
                                    type="date" 
                                    value={moment(date).format('YYYY-MM-DD')}
                                    onChange={PickDate}
                                />
                            </div>
                        </div>
                        <div className="h-full w-[calc((100%/14)*3)] flex flex-col-reverse">
                        <button onClick={NextWeek} className="w-full h-[30px] bg-[#20B5FF] rounded-tr-[15px] text-white">Volgende Week</button>
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
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Maandag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[0])}</div>
                                </td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Dinsdag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[1])}</div>
                                </td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Woensdag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[2])}</div>
                                </td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Donderdag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[3])}</div>
                                </td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Vrijdag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[4])}</div>
                                </td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Zaterdag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[5])}</div>
                                </td>
                                <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] text-center">
                                    <div className="h-1/2 w-full text-2xl flex-col-reverse flex">Zondag</div>
                                    <div className="h-1/2 w-full text-2s">{ConvertMoment(weekDates[6])}</div>
                                </td>
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
            <div className="w-full h-[100px] bg-[#FF00FF]">
            </div>
            <h1>Departments</h1>
            <div style={{height: hideOrShowDepartmentsTab}} className="duration-[0.5s] w-[100%] bg-[#ff0000]"></div>
            <button onClick={HandleDepartmentsTab}className="h-[100px] w-[100%] h-[50px] bg-[#ffffff]"></button>
            
            <h1>Sections</h1>
            <div style={{height: hideOrShowSectionsTab}} className="duration-[0.5s] w-[100%] bg-[#ff0000]"></div>
            <button onClick={HandleSectionsTab}className="h-[100px] w-[100%] h-[50px] bg-[#ffffff]"></button>

            <h1>Projects</h1>
            <div style={{height: hideOrShowProjectsTab}} className="duration-[0.5s] w-[100%] bg-[#ff0000]"></div>
            <button onClick={HandleProjectsTab}className="h-[100px] w-[100%] h-[50px] bg-[#ffffff]"></button>
        </div>
    </div>
    )
  }
  
  export default FrontPage 