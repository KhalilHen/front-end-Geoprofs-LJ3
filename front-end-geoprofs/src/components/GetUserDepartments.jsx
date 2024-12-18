import React from 'react';
import { backendUrl } from '../config/config.json';

function GetUserDepartment(){

    var id = 1;
    var temp = JSON.parse(getCookie("user"));

    console.log(temp.userToken);
    console.log(temp.userId);
    console.log(temp.cacheId);

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    function GetDepartment(){
        console.log("backendUrl: " + backendUrl);

        fetch(backendUrl+'/sanctum/csrf-cookie', {
            credentials: 'include',
        })
        .then(() => {
            fetch(backendUrl+'/getUsersFromDepartment', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idUser: temp.userId,
                    userToken: temp.userToken,
                    cacheId: temp.cacheId,
                    idDepartment: 1,
                }),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(async data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });
    }

    return (
        <>
            <button onClick={GetDepartment}>Get Department</button>
        </>
    )
}

export default GetUserDepartment