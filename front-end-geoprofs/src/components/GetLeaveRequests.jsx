import { backendUrl } from '../config/config.json';
import React, { useState, useEffect } from 'react';
import { getCookie } from './GetCookie'

function GetLeaveRequests(setData = null, userCookie = null, setResponse = null){
  
    if(!userCookie){
        var userCookie = JSON.parse(getCookie("user"));        
    }

    return fetch(backendUrl+'/getLeaveRequests?user_id='+userCookie.user_id+'&access_token='+userCookie.access_token+'&cache_id='+userCookie.cache_id, {
        method: 'GET',
        credentials: 'include',
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
        if (setData) {
            setData(data);
        }
    })
    .catch(error => console.error('Error:', error));
}

export { GetLeaveRequests };