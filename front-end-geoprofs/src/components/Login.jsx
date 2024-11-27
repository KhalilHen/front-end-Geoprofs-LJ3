import Logo from '../images/GeoprofsLogo.png';

import backgroundImage1 from '../images/backgroundImage1.jpg';
import backgroundImage2 from '../images/backgroundImage2.jpg';
import backgroundImage3 from '../images/backgroundImage3.jpg';

import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

function HeaderNormal() {
    const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);
    const colors = [backgroundImage1, backgroundImage2, backgroundImage3];
    let currentIndex = 0;
    const url = "http://127.0.0.1:8000/login";
    const [data ,setData ] = useState();
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
            setBackgroundImage(colors[currentIndex]);
            
        }, 6000); // Change color every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    function handleChangePassword(e){
        setPassword(e.target.value);
    }

    function handleChangeMail(e){
        setMail(e.target.value);
    }

    function login(){
        fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
            credentials: 'include',
        })
            .then(() => {
                // Now send the login request
                fetch('http://127.0.0.1:8000/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        emailOrId: mail,
                        password: password,
                    }),
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error));
            });
    }


    return (
      <div style={{backgroundImage: "url(" + backgroundImage + ")"}} className="bg-center bg-no-repeat bg-cover background-image duration-[2s] w-full h-full content-center flex flex-wrap justify-center">
        <div className="bg-[#fff] w-[300px] h-[500px] border-solid border-[#A7A7A7] border-[1px]">
            <div className="w-full h-[150px] content-center flex flex-wrap justify-center">
                <img className="w-[90%]" src={Logo} alt="" />
            </div>
            <div className="w-full h-[100px] flex flex-col content-center flex-wrap">
                <h1 className="text-xl text-center">E-mail / ID</h1>
                <input placeholder="E-mail / ID" className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px]" type="text" onChange={handleChangeMail} value={mail}/>
            </div>
            <div className="w-full h-[100px]  flex flex-col content-center flex-wrap">
                <h1 className="text-xl text-center">Wachtwoord</h1>
                <input placeholder="Wachtwoord" className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px]" type="password" onChange={handleChangePassword} value={password} />
            </div>
            {data}
            <div className="w-full h-[150px] content-center flex flex-wrap justify-center">
                <button className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px] rounded-full flex justify-center" onClick={login}>Log In</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default HeaderNormal