import { backendUrl } from '../config/config.json';
import React, { useState, useEffect } from 'react';

function ApproveOrDeclineLeaveRequest(inputValues, setData = null, userCookie = null, setResponse = null) {

    if(!userCookie){
        var userCookie = JSON.parse(getCookie("user"));        
    }

    return fetch(backendUrl + '/approveOrDeclineLeaveRequest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userCookie.user_id,
            access_token: userCookie.access_token,
            cache_id: userCookie.cache_id,

            leave_request_id: inputValues.leave_request_id,
            value: inputValues.value,
        }),
    })
    .then((response) => {
        if (setResponse){
            setResponse(response.status);
        }
        if (response.ok) {
            return response.json();
        }
    })
    .then(async (data) => {
        await setData(data);
    })
    .catch((error) => console.error('Error:', error));
}

export { ApproveOrDeclineLeaveRequest };