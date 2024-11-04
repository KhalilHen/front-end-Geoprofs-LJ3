import { Outlet, Link } from "react-router-dom";
import Logo from '../images/GeoprofsLogo.png';

function HeaderManager() {
  return (
    <header className="flex bg-[#EBEBEB] w-full h-[140px] p-[35px]">
    <div className="bg-[#ff0000] w-[calc(100%/3)] h-full">
      <Link to="/">
        <img className="h-full" src={Logo} alt="" />
      </Link>
    </div>
    <div className="bg-[#00ff00] w-[calc(100%/3)] h-full"></div>
    <div className="bg-[#0000ff] w-[calc(100%/3)] h-full"></div>
  </header>
  )
}

export default HeaderManager