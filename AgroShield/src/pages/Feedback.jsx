import React from 'react'
import './Home.css'
import { useState } from "react";
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/auth/feedback', {
            name,
            email,
            feedback
        });
        if (response.status === 200) {
            const data = response.data;
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            alert('Feedback failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during Feeding:', error);
        alert('An error occurred. Please try again later.');
    }
};
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className='content ml-[20%] mt-[12vh] mr-[2vw]'>
          <div className='text-[4.5vh] text-bold'>
            Feedback
          </div>
          <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="name" class="block text-sm font-medium leading-6">Name</label>
                            <div class="mt-2">
                            <input id="name" name="name" type="name" autocomplete="name" required class="block w-[50%] rounded-md border-0 py-1.5 bg-[#171a1f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black" />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6">Email address</label>
                            <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-[50%] rounded-md border-0 py-1.5 bg-[#171a1f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label for="feedback" className="block text-sm font-medium leading-6">Feedback</label>
                            </div>
                            <div class="mt-2">
                            <input id="feedback" name="feedback" type="feedback" autocomplete="current-feedback" required class="text-white bg-[#171a1f] block w-[50%] h-[15vh] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-[50%] justify-center rounded-md bg-[#6d31ed] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 hover:scale-[110%] duration-150 hover:duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outlin">Submit</button>
                        </div>
                      </form>
        </div>
      </>
    ) 
  }
  
export default Feedback