import { backendUrl } from '../config/config.json';
import React, { useState, useEffect } from 'react';

function GetUserDepartment(departmentId, setUsers = null, userCookie = null, setResponse = null){

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

    if(!userCookie){
        var userCookie = JSON.parse(getCookie("user"));        
    }

    return fetch(backendUrl+'/getUsersDepartment?user_id='+userCookie.user_id+'&access_token='+userCookie.access_token+'&cache_id='+userCookie.cache_id+"&id_department="+departmentId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (setResponse){
            setResponse(response.status);
        }
        if (response.ok) {
            return response.json();
        }
    })
    .then(async data => {
        if (setUsers) {
            setUsers(data);
        }
    })
    .catch(error => console.error('Error:', error));
}

export { GetUserDepartment };