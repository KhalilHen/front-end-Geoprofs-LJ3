import { backendUrl } from '../config/config.json';
import React, { useState, useEffect } from 'react';

function CreateLeaveRequest(inputValues, setUser = null, userCookie = null, setResponse = null) {

    if(!userCookie){
        var userCookie = JSON.parse(getCookie("user"));        
    }

    return fetch(backendUrl + '/createLeaveRequest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userCookie.user_id,
            access_token: userCookie.access_token,
            cache_id: userCookie.cache_id,

            title: inputValues.title,
            description: inputValues.description,
            category: inputValues.categoryId,
            start_date: inputValues.startDate,
            end_date: inputValues.endDate,
            is_paid: inputValues.isPaid,
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
        await setUser(data);
    })
    .catch((error) => console.error('Error:', error));
}

export { CreateLeaveRequest };