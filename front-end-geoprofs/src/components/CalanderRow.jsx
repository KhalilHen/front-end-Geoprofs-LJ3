import React from 'react';

import Bookmark from '../images/icons/Bookmark.png';
import BookmarkFilled from '../images/icons/BookmarkFilled.png';
import User from '../images/icons/user.png';
import { button } from '@material-tailwind/react';

function CalanderRow(props) {
    return (
        
        <div className="w-full h-[100px] flex">
            <div className="w-1/4 h-full justify-center flex">
                <div className="w-4/5 h-full border-b-[1px] border-[#A7A7A7] items-center flex">
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex '>
                            <div className="w-[50px] h-[50px]">
                                <img className='rounded-full h-[50px] w-[50px] object-cover' src={props.user.pfp != null ? props.user.pfp : User} alt="User" />
                            </div>
                            <p className='mx-[5px] items-center flex'>{props.user.name}</p>
                        </div>
                        <button className='w-[40px] h-[40px]'>
                            <img src={Bookmark} alt="bookmark" />
                        </button>
                    </div>    
                </div>
            </div>
            <div className="w-3/4 h-full">
                <table className="h-full w-full">
                    <tbody>
                        <tr className="h-full w-full">
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                            <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  }

  export default CalanderRow