"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  showPassword: boolean;
}

const LoginSignupForm: React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState<FormState>({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    showPassword: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === 'login') {
      try {
        const response = await axios.post('/api/users/login', {
          email: formData.email,
          password: formData.password,
        });
        console.log('Logged in:', response.data);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    } else {
      try {
        const response = await axios.post('/api/users/signup', {
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        });
        console.log('Signed up:', response.data);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    }
    setFormData({ email: '', password: '', confirmPassword: '', phoneNumber: '', showPassword: false });
  };

  const toggleFormType = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
    setFormData({ email: '', password: '', confirmPassword: '', phoneNumber: '', showPassword: false });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-black">
            {formType === 'login' ? 'Login' : 'Sign Up'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={formData.showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2 pr-10"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            {formType === 'signup' && (
              <>
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-center mt-4">
            <div className="text-sm text-center">
              {formType === 'login' ? (
                <p className='text-black'>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={toggleFormType}
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p className='text-black'>
                  Already registered?{' '}
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={toggleFormType}
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {formType === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mb-2"
          >
            <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 mr-2" />
            Login with Google
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 mr-2" />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
