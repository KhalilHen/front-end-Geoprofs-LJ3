import CalanderRow from "./CalanderRow";
import React, { useState, useEffect, useRef } from "react";
import moment from 'moment';
import Header from './Header'
import { Link } from "react-router-dom";
import schedule_white from "../images/icons/schedule_white.png"
import DropdownIcon from "../images/icons/dropdown.png"

function FrontPage() {

    const Departments = [//temporary
        {
            id: "1",
            title: "D1",
        },
        {
            id: "2",
            title: "D2",
        },
        {
            id: "3",
            title: "D3",
        }
    ];

    const Sections = [//temporary
        {
            id: "1",
            title: "S1",
        },
        {
            id: "2",
            title: "S2",
        },
        {
            id: "3",
            title: "S3",
        }
    ];

    const Projects = [//temporary
        {
            id: "1",
            title: "P1",
        },
        {
            id: "2",
            title: "P2",
        },
        {
            id: "3",
            title: "P3",
        }
    ];

    const Users = [
        {
            id: "1",
            name: "jessie",
            pfp: null
        },
        {
            id: "2",
            name: "Steve",
            pfp: '/profilePictures/steve1.jpg'
        },
        {
            id: "3",
            name: "Herobrine",
            pfp: '/profilePictures/herobrine1.jpg'
        }
    ];

    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleFilter = (value) => {
        const filtered = Users.filter(user => user.name.toLowerCase().includes(value));
        setFilteredUsers(filtered);
    };

    useEffect(() => {
        setFilteredUsers(Users);
    },[]);

    const [date, setDate] = useState(new Date());
    const [weekNumber, setWeekNumber] = useState(moment().isoWeek());
    const [weekDates, setWeekDates] = useState([]);
  
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

    const [departmentsTabIsOpen, setDepartmentsTabIsOpen] = useState(false);
    const DepartmentsTab = useRef(null);
  
    const ToggleDepartmentsTab = () => {
        const element = DepartmentsTab.current;
    
        if (departmentsTabIsOpen) {
            element.style.height = `${element.scrollHeight}px`;
            requestAnimationFrame(() => {
            element.style.height = "0px";
            });
        } else {
            element.style.height = "0px";
            requestAnimationFrame(() => {
            const targetHeight = `${element.scrollHeight}px`;
            element.style.height = targetHeight;
            });
        }
    
        setDepartmentsTabIsOpen(!departmentsTabIsOpen);
    };

    const [sectionsTabIsOpen, setSectionsTabIsOpen] = useState(false);
    const SectionsTab = useRef(null);
  
    const ToggleSectionsTab = () => {
        const element = SectionsTab.current;
    
        if (sectionsTabIsOpen) {
            element.style.height = `${element.scrollHeight}px`;
            requestAnimationFrame(() => {
            element.style.height = "0px";
            });
        } else {
            element.style.height = "0px";
            requestAnimationFrame(() => {
            const targetHeight = `${element.scrollHeight}px`;
            element.style.height = targetHeight;
            });
        }
    
        setSectionsTabIsOpen(!sectionsTabIsOpen);
    };

    const [projectsTabIsOpen, setProjectsTabIsOpen] = useState(false);
    const ProjectsTab = useRef(null);
  
    const ToggleProjectsTab = () => {
        const element = ProjectsTab.current;
    
        if (projectsTabIsOpen) {
            element.style.height = `${element.scrollHeight}px`;
            requestAnimationFrame(() => {
            element.style.height = "0px";
            });
        } else {
            element.style.height = "0px";
            requestAnimationFrame(() => {
            const targetHeight = `${element.scrollHeight}px`;
            element.style.height = targetHeight;
            });
        }
    
        setProjectsTabIsOpen(!projectsTabIsOpen);
    };

    return (
    <>
    <Header/>
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
                                <p className="text-2xl text-center" data-testid="week-output" >{"week " + weekNumber}</p>
                            </div>
                            <div className="h-1/2 w-full flex flex-col-reverse datepicker" >
                                <input
                                    data-testid="date-input"
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
                            <div className="flex justify-center items-center flex h-full w-[calc((100%/14)*3)]">
                                <Link className="justify-between rounded-full flex w-[90%] h-[40px] bg-[#20B5FF]" to="/leave-request">
                                    <p className="w-full align-middle text-center p-[8px] text-[#ffffff]">Verlof Aanvragen</p>
                                    <img src={schedule_white} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex">
                        <div className="w-1/4 h-full content-center">
                        <form className="justify-center flex" action="">
                            <input onChange={event => handleFilter(event.target.value)} className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px]" type="text" />
                        </form>
                        </div>
                        <div className="w-3/4 h-full flex">
                            <table className="h-full w-full">
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[calc(100vh-340px)] overflow-y-scroll scrollbar-hide">
                {filteredUsers.map(user => {            
                    return(
                        <CalanderRow key={user.id} user={user} />
                    )
                })}
                </div>
            </div>
            <div className="w-1/5 h-full px-[15px]" data-testid ="filter-list">
                <div className="w-full h-[100px]"></div>
                <h1>Departments</h1>
                <div className="h-0 w-[100%] overflow-hidden overflow-hidden transition-all duration-500 ease-in-out"
                ref={DepartmentsTab}>
                {Departments.map(Department => {            
                    return(
                        <div key={Department.id} className="w-full h-[20px] flex">
                            <input type="checkbox" name="" id="" />
                            <p>{Department.title}</p>
                        </div>
                        )
                    })}
                </div>
                <button onClick={ToggleDepartmentsTab} className="h-[100px] w-[100%] h-[50px] bg-[#ffffff] border-[#A7A7A7] border-t-[1px] border-b-[1px] bg-[#ffffff] flex justify-center items-center" data-testid ="filter-departments">
                <img
                    className={`w-[40px] h-[40px] transition-transform ${
                        departmentsTabIsOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    src={DropdownIcon}
                    alt=""
                />
                </button>
                <h1>Sections</h1>
                <div className="h-0 w-[100%] overflow-hidden overflow-hidden transition-all duration-500 ease-in-out"
                ref={SectionsTab}>
                    {Sections.map(Section => {            
                        return(
                            <div key={Section.id} className="w-full h-[20px] flex">
                                <input type="checkbox" name="" id="" />
                                <p>{Section.title}</p>
                            </div>
                        )
                    })}
                </div>
                <button onClick={ToggleSectionsTab} className="h-[100px] w-[100%] h-[50px] bg-[#ffffff] border-[#A7A7A7] border-t-[1px] border-b-[1px] bg-[#ffffff] flex justify-center items-center" data-testid ="filter-sections">
                <img
                    className={`w-[40px] h-[40px] transition-transform ${
                        sectionsTabIsOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    src={DropdownIcon}
                    alt=""
                />
                </button>
                
                <h1>Projects</h1>
                <div className="h-0 w-[100%] overflow-hidden overflow-hidden transition-all duration-500 ease-in-out"
                ref={ProjectsTab}>
                    {Projects.map(Project => {            
                        return(
                            <div key={Project.id} className="w-full h-[20px] flex">
                                <input type="checkbox" name="" id="" />
                                <p>{Project.title}</p>
                            </div>
                        )
                    })}
                </div>
                <button onClick={ToggleProjectsTab} className="h-[100px] w-[100%] h-[50px] bg-[#ffffff] border-[#A7A7A7] border-t-[1px] border-b-[1px] bg-[#ffffff] flex justify-center items-center" data-testid ="filter-projects">
                <img
                    className={`w-[40px] h-[40px] transition-transform ${
                        projectsTabIsOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    src={DropdownIcon}
                    alt=""
                />
                </button>
            </div>
        </div>
    </>
    )
  }
  
  export default FrontPage 