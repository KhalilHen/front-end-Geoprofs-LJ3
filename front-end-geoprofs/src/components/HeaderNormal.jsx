import { Popover, PopoverHandler, PopoverContent, Button, Input, Typography,} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import Logo from '../images/GeoprofsLogo.png';
import User from '../images/icons/user.png';
import Notification from '../images/icons/notifications.png';

function HeaderNormal() {
  return (
    <header className="flex bg-[#EBEBEB] w-full h-[140px] p-[35px]">
    <div className="w-[calc(100%/3)] h-full">
      <Link to="/front-page">
        <img className="h-full" src={Logo} alt="" />
      </Link>
    </div>
    <div className="w-[calc(100%/3)] h-full"></div>
    <div className="bg-[#0000ff] w-[calc(100%/3)] h-full flex">
      <div className="w-[50%] h-full bg-[#ff0000] flex justify-end items-center">
        <Link to="/inbox" className="bg-[#20B5FF] w-[auto] h-[40px] rounded-full flex p-[5px] items-center">
          <p className="px-[15px] text-white align-middle">Inbox</p>
          <img className="h-[35px] w-[35px]" src={Notification} alt="" />
        </Link>
      </div>
      <div className="w-[50%] h-full bg-[#ff00ff] flex-row-reverse flex">
        <Popover placement="bottom">
          <PopoverHandler>
            <button className="w-auto h-full flex flex-row-reverse">
              <img src={User} alt="" className="w-[70px] h-[70px] rounded-full" />
              <p className="h-full text-center">John Doe</p>
            </button>
          </PopoverHandler >
          <PopoverContent className="p-0">
            <div className="p-0 border-solid border-2 border-[#A7A7A7] h-auto w-[350px]">
              <div className="w-full h-[70%] p-[10px] flex">
                <div className="h-[100px] w-auto bg-[#ff0000] aspect-square">
                  <img src={User} alt="" className="h-full w-full"/>
                </div>
                <div className="px-[5px] w-[calc(100%-100px)] h-full">
                  <p className="text-2xl">John Doe</p>
                  <p>Project Manager</p>
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

export default HeaderNormal