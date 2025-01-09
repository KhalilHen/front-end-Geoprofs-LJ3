import { backendUrl } from '../config/config.json';
import React, { useState, useEffect } from 'react';

function GetUserDepartment(){

    var temp = JSON.parse(getCookie("user"));

    // console.log(temp.userToken);
    // console.log(temp.userId);
    // console.log(temp.cacheId);

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

    function GetDepartment(departmentId){
        fetch(backendUrl+'/sanctum/csrf-cookie', {
            credentials: 'include',
        })
        .then(() => {
            fetch(backendUrl+'/getUsersDepartment?idUser='+temp.userId+'&userToken='+temp.userToken+'&cacheId='+temp.cacheId+"&idDepartment="+departmentId, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
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
}

export default GetUserDepartment