import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import axios from 'axios';

function Login() {
    const toRegister = () => {
        navigate('/register');
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password
            });

            if (response.status === 200) {
                const data = response.data;
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    return (
      <>
        <Navbar />
        <div className="content mt-[12vh]">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 logreg-page">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className="text-center text-2xl font-bold leading-9 tracking-tight" style={{fontSize: "2rem"}}>AgroShield</h1>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
                    </div>
                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6">Email address</label>
                            <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white text-black" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm font-medium leading-6">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold">Forgot password?</a>
                            </div>
                            </div>
                            <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-[#6d31ed] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 hover:scale-[110%] duration-150 hover:duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outlin">Sign in</button>
                        </div>
                        <div className="text-center">
                            Or
                        </div>
                        <button onClick={toRegister} type="submit" className="flex w-full justify-center rounded-md bg-[#6d31ed] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 hover:scale-[110%] duration-150 hover:duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outlin">Register</button>
                        </form>
                    </div>
                </div>
            </div>
      </>
    ) 
  }
  
export default Login 