import { Popover, PopoverHandler, PopoverContent, Button, Input, Typography,} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import Logo from '../images/GeoprofsLogo.png';
import User from '../images/icons/user.png';
import Notification from '../images/icons/notifications.png';
import Statistics from '../images/icons/statistics.png';

function HeaderManager() {
  return (
    <header className="flex bg-[#EBEBEB] w-full h-[140px] p-[35px]">
    <div className="w-[calc(100%/3)] h-full">
      <Link to="/front-page">
        <img className="h-full" src={Logo} alt="" />
      </Link>
    </div>
    <div className="w-[calc(100%/3)] h-full"></div>
    <div className="w-[calc(100%/3)] h-full flex justify-end">

    {/* if user = ceo (or person with access to statistics page), true. else false */}
    {true ?
      <div className="w-[50%] h-full flex justify-between items-center">
        <Link to="/statistics" className="bg-[#20B5FF] w-[40px] h-[40px] rounded-full flex justify-center items-center ">
          <img className="w-[30px] h-[30px]" src={Statistics} alt="" />
        </Link>
        <Link to="/inbox" className="bg-[#20B5FF] w-[auto] h-[40px] rounded-full flex p-[5px] items-center">
          <p className="px-[15px] text-white align-middle">Inbox</p>
          <div style={{backgroundImage: "url(" + Notification + ")"}} className="flex h-[35px] w-[35px] bg-center bg-no-repeat bg-cover background-image justify-end">

            {/* if number of unread messages is higher than 0, true. else, false. */}
            {true ? <div className="w-[10px] h-[10px] bg-red-500 rounded-full absolute m-[5px]"></div> : ''}
          </div>
        </Link>
      </div>
      : 
      <div className="w-[50%] h-full flex justify-end items-center">
        <Link to="/inbox" className="bg-[#20B5FF] w-[auto] h-[40px] rounded-full flex p-[5px] items-center">
          <p className="px-[15px] text-white align-middle">Inbox</p>
          <div style={{backgroundImage: "url(" + Notification + ")"}} className="flex h-[35px] w-[35px] bg-center bg-no-repeat bg-cover background-image justify-end">
            <div className="w-[10px] h-[10px] bg-red-500 rounded-full absolute m-[5px]"></div>
          </div>
        </Link>
      </div>
    }

      <div className="flex w-[50%] h-full justify-end">
        <Popover placement="bottom">
          <PopoverHandler>
            <button className="w-auto h-full flex items-center">
              <p className="p-[10px] text-center text-xl">John Doe</p>
              <img src={User} alt="" className="w-[70px] h-[70px] rounded-full border-solid border-[#A7A7A7] border-[1px]" />
            </button>
          </PopoverHandler >
          <PopoverContent className="p-0">
            <div className="p-0 border-solid border-2 border-[#A7A7A7] h-auto w-[350px]">
              <div className="w-full h-[70%] p-[10px] flex">
                <div className="h-[100px] w-auto aspect-square border-solid border-[#A7A7A7] border-[1px]">
                  <img src={User} alt="" className="h-full w-full"/>
                </div>
                <div className="justify-end items-center px-[5px] w-[calc(100%-100px)]">
                  <p className="text-2xl text-black">John Doe</p>
                  <p className="text-black">Project Manager</p>
                </div>
              </div>
              <div className="w-full h-[30%] p-[10px] justify-end items-center flex">
                <button className="bg-[#ff0000] text-white w-[100px] h-[30px] rounded-full">Log Uit</button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </header>
  )
}

export default HeaderManager