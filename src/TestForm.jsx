import React, { useState } from 'react';
import { validateEmail, validatePhone_IN, validatePassword, validateURL, validateCreditCardNumber, validateUsername } from 'form-validation-lib-js';

function TestForm() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [url, setURL] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [username, setUsername] = useState('');

    const regexTelIndia = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
    const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;



    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidPassword = validatePassword(password);
        const isValidURL = validateURL(url);
        const isValidCreditCardNumber = validateCreditCardNumber(creditCardNumber);
        const isValidUsername = validateUsername(username);


        const isValidPhone = regexTelIndia.test(phone);
        const isValid = regexEmail.test(email);
        if (isValid) {
            console.log('Email is valid');
        } else {
            console.log('Email is invalid');
        }
        if (isValidPhone) {
            console.log('Phone is valid');
        } else {
            console.log('Phone is invalid');
        }
        if (isValidPassword) {
            console.log('Password is valid');
        } else {
            console.log('Password is invalid');
        }
        if (isValidURL) {
            console.log('URL is valid');
        } else {
            console.log('URL is invalid');
        }
        if (isValidCreditCardNumber) {
            console.log('Credit Card Number is valid');
        } else {
            console.log('Credit Card Number is invalid');
        }
        if (isValidUsername) {
            console.log('Username is valid');
        } else {
            console.log('Username is invalid');
        }
    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" className='p-2 border border-gray-300 rounded' />
                <input placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='p-2 border border-gray-300 rounded mt-4' />
                <input placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 border border-gray-300 rounded mt-4' />
                <input placeholder="Enter URL" value={url} onChange={(e) => setURL(e.target.value)} className='p-2 border border-gray-300 rounded mt-4' />
                <input placeholder="Enter Credit Card Number" value={creditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)} className='p-2 border border-gray-300 rounded mt-4' />
                <input placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 border border-gray-300 rounded mt-4' />
                <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'>Validate</button>
            </form>
        </div>
    );
}

export default TestForm;