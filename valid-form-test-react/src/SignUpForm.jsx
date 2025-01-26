import React, { useState } from "react";
import { FormValidator } from 'form-validation-lib-js';

function SignUpForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        password: '',
        dateOfBirth: ''
    });

    const [errors, setErrors] = useState({});

    const validator = new FormValidator();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationSchema = {
            firstName: [{ type: 'required', message: 'First name is required' }],
            email: [{ type: 'email', message: 'Invalid email' }],
            phone: [{ type: 'phone', message: 'Invalid phone number' }],
            password: [{ type: 'password', message: 'Weak password' }],
            dateOfBirth: [{ type: 'date', message: 'Invalid date of birth' }],
        };

        // Validate form data
        const result = await validator.validateForm(formData, validationSchema);

        if (!result.isValid) {
          setErrors(result.errors.reduce((acc, error) => ({
            ...acc,
            [error.field]: error.message
          }), {}));
          return;
        }

        // Form data is valid
        console.log('Form data is valid:', formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="first-name" className="block text-gray-700">First Name:</label>
                    <input type="text" id="first-name" name="first-name" required className="mt-1 p-2 w-full border rounded-md" autofocus onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                    <input type="tel" id="phone" name="phone" required className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="date-of-birth" className="block text-gray-700">DOB:</label>
                    <input type="date" id="date-of-birth" name="date-of-birth" required className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} />
                    {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" required className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;