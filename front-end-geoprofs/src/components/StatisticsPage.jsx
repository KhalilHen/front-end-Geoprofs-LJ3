import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import HeaderNormal from './HeaderNormal'
import HeaderManager from './HeaderManager'



function StatisticsPage() {    

    return (
    <>
    <HeaderManager/>
    {/* <HeaderNormal/> */}
        <div className="w-full h-[calc(100vh-140px)] flex flex-col">
            <div className='h-[10%] w-full'></div>
            <div className='h-[70%] w-full flex justify-center'>
                <div className='h-full w-[80%] bg-[#EBEBEB]'></div>
            </div>
            <div className='h-[20%] w-full flex justify-center'>
                <div className='h-full w-[80%] flex flex-row justify-between items-center'>
                    <Link to="/front-page" className="border-[#A7A7A7] border-2 bg-[#ffffff] w-[150px] h-[40px] rounded-full flex p-[5px] flex items-center justify-center">
                        <p>Home</p>
                    </Link>

                    <button className="w-[150px] h-[40px] rounded-full flex p-[5px] flex items-center justify-center bg-[#20B5FF] text-white">
                        <p>Get Data</p>
                    </button>


                </div>
            
            </div>
        </div>
    </>
    )
  }
  
  export default StatisticsPage 