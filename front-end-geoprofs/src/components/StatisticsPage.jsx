import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import HeaderNormal from './HeaderNormal'
import HeaderManager from './HeaderManager'

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function StatisticsPage() {    
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

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

                    <button onClick={handleOpen} className="w-[150px] h-[40px] rounded-full flex p-[5px] flex items-center justify-center bg-[#20B5FF] text-white">
                        <p>Get Data</p>
                    </button>
                </div>
            </div>
        </div>

        <Dialog size="xs" open={open} handler={handleOpen} className="rounded-none">
            <DialogBody>
                <div className='h-auto'>
                    <p className='text-center text-black'>Select first en last date to dowload a Json file
                    with sick leave days.</p>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-black'>Datum Van:</p>
                        <input className='border-[1px] border-[#A7A7A7] rounded-none' type="date" name="start-date" id="start-date"/>
                    </div>
                    <div className='w-[200px]'>
                        <p className='text-black'>Datum Tot:</p>
                        <input className='w-[200px] border-[1px] border-[#A7A7A7] rounded-none' type="date" name="end-date" id="end-date"/>

                        <button className="my-[10px] w-full h-[35px] rounded-full flex p-[5px] flex items-center justify-center bg-[#20B5FF] text-white">
                            <p>Download JSON</p>
                        </button>
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    </>
    )
  }
  
  export default StatisticsPage 