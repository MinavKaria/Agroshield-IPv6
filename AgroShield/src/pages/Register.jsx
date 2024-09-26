import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import axios from "axios";

function Register() {
  const [selectedOption, setSelectedOption] = useState("doctor");

  const toLogin = () => {
    Navigate("/login");
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const location = document.getElementById("location").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;
    
        if (password !== confirmpassword) {
          alert(t('passwords_do_not_match'));
          return;
        }
    
        const data = {
          name,
          contact: mobile,
          farmLocation: location,
          email,
          password,
          animals: [],
          crops: []
        };
    
        try {
          const response = await axios.post("http://localhost:3000/auth/signup", data);
          console.log(response);
    
          if (response.status === 200) {
            alert(t('registration_successful'));
          }
    
        } catch (error) {
          console.error(error);
        }
      }
        

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 logreg-page mt-[7vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl font-bold leading-9 tracking-tight" style={{ fontSize: "2rem" }}>
            AgroShield
          </h1>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">Register</h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 ${selectedOption === "doctor" ? "bg-[#6d31ed] text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedOption("doctor")}
            >
              Doctor
            </button>
            <button
              className={`px-4 py-2 ml-2 ${selectedOption === "ngo" ? "bg-[#6d31ed] text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedOption("ngo")}
            >
              NGO
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Common Fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium leading-6">
                Contact Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium leading-6">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="location"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
              />
            </div>

            <div>
              <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6">
                Confirm Password
              </label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
              />
            </div>

            {/* Doctor Specific Fields */}
            {selectedOption === "doctor" && (
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium leading-6">
                  Specialization
                </label>
                <input
                  id="specialization"
                  name="specialization"
                  type="text"
                  autoComplete="specialization"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
                />
              </div>
            )}

            {/* NGO Specific Fields */}
            {selectedOption === "ngo" && (
              <div>
                <label htmlFor="ngoName" className="block text-sm font-medium leading-6">
                  Coodinator
                </label>
                <input
                  id="ngoName"
                  name="ngoName"
                  type="text"
                  autoComplete="ngo-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black mt-1"
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#6d31ed] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;