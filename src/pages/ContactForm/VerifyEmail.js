import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function VerifyEmail() {
    const [code, setCode] = useState(0);
    const [verifyed, setVerified] = useState(false);

    const baseUrl = process.env.REACT_APP_API_URL;
    const email = props.email;

    const validateCode = (code) => {
        axios.post(baseUrl + '/verify/', {code: code, email : email})
            .then(response => setVerified(response.authorized));
    }

    return (
        <div>

        </div>
    )
}
