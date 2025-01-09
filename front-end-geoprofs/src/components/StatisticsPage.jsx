import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function StatisticsPage() { 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <>
    <Header/>
        <div className="w-full h-[calc(100vh-140px)] flex flex-col">
            <div className='h-[10%] w-full flex justify-center items-end'>
                <div className='w-[175px]'>
                    <input className='w-[175px] border-[1px] border-[#A7A7A7] rounded-none' type="date" name="start-date" id="start-date"/>
                </div>
            </div>
            <div className='h-[70%] w-full flex justify-center'>
                <div className='h-full w-[80%] bg-[#EBEBEB]'></div>
            </div>
            <div className='h-[20%] w-full flex justify-center'>
                <div className='h-full w-[80%] flex flex-row justify-between items-center'>
                    <Link to="/front-page" className="border-[#A7A7A7] border-2 bg-[#ffffff] w-[150px] h-[40px] rounded-full flex p-[5px] flex items-center justify-center">
                        <p>Home</p>
                    </Link>

                    <button variant="outlined" onClick={handleClickOpen} className="w-[150px] h-[40px] rounded-full flex p-[5px] flex items-center justify-center bg-[#20B5FF] text-white">
                        <p>Get Data</p>
                    </button>
                </div>
            </div>
        </div>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className='text-center text-black' id="alert-dialog-title">
          {"Select first en last date to dowload a Json filewith sick leave days."}
        </DialogTitle>
        <DialogContent>
          <div className='h-auto'>
                    <p className=''></p>
                </div>
                <div className='flex flex-row justify-between items-center p-[10px]'>
                    <div className='w-[175px]'>
                        <p className='text-black'>Datum Van:</p>
                        <input className='w-[175px] border-[1px] border-[#A7A7A7] rounded-none' type="date" name="start-date" id="start-date"/>

                        <button onClick={handleClose} className="my-[10px] w-full h-[35px] rounded-full flex p-[5px] flex items-center justify-center border-[#A7A7A7] border-2 bg-[#ffffff] text-black">
                            <p>Cancel</p>
                        </button>
                    </div>
                    <div className='w-[175px]'>
                        <p className='text-black'>Datum Tot:</p>
                        <input className='w-[175px] border-[1px] border-[#A7A7A7] rounded-none' type="date" name="end-date" id="end-date"/>

                        <button onClick={handleClose /*change to download data function*/} className="my-[10px] w-full h-[35px] rounded-full flex p-[5px] flex items-center justify-center bg-[#20B5FF] text-white">
                            <p>Download JSON</p>
                        </button>
                    </div>
                </div>
            </DialogContent>
      </Dialog>
    </>
    )
  }
  
  export default StatisticsPage 