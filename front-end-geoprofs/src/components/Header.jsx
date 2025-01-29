
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
            {/* if number of unread messages is higher than 0, true. else, false. */}
            {true ? <div className="w-[10px] h-[10px] bg-red-500 rounded-full absolute m-[5px]"></div> : ''}
          </div>
        </Link>
      </div>
    }

      <div className="flex w-[50%] h-full justify-end">
      </div>
    </div>
  </header>
  )
}

export default HeaderManager