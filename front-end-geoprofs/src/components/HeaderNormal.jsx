import { Outlet, Link } from "react-router-dom";
import Logo from '../images/GeoprofsLogo.png';
import User from '../images/icons/user.png';
import Notification from '../images/icons/notifications.png';

function HeaderNormal() {
  return (
    <header className="flex bg-[#EBEBEB] w-full h-[140px] p-[35px]">
    <div className="bg-[#ff0000] w-[calc(100%/3)] h-full">
      <Link to="/front-page">
        <img className="h-full" src={Logo} alt="" />
      </Link>
    </div>
    <div className="bg-[#00ff00] w-[calc(100%/3)] h-full"></div>
    <div className="bg-[#0000ff] w-[calc(100%/3)] h-full flex">
      <div className="w-[50%] h-full bg-[#ff0000] flex justify-end">
        <Link to="/notification-page" className="bg-[#20B5FF] w-[auto] h-[40px] rounded-full flex p-[5px] items-center">
          <p className="px-[15px] text-white align-middle">Inbox</p>
          <img className="h-[35px] w-[35px]" src={Notification} alt="" />
        </Link>
      </div>
      <div className="w-[50%] h-full bg-[#ff00ff] flex-row-reverse flex">
        <button className="w-auto h-full flex flex-row-reverse">
          <img src={User} alt="" className="w-[70px] h-[70px] rounded-full" />
          <p className="h-full text-center">John Doe</p>
        </button>
      </div>
    </div>
  </header>
  )
}

export default HeaderNormal