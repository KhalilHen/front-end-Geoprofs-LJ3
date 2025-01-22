import { backendUrl } from '../config/config.json';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login(mail, password, setUser, setResponse = null) {
    const navigate = useNavigate();
    return fetch(backendUrl + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailOrId: mail,
        password: password,
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
    navigate('/front-page');
    })
    .catch((error) => console.error('Error:', error));
    
}

export { Login };