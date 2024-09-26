import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './navbar.css';
function Navbar(){  
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    const Dashboard = () => {
        navigate('/');
      };
    const Reports = () => {
        navigate('/reports');;
      };
    const Alerts = () => {
        navigate('/alerts');;
      };
    const Login = () => {
        navigate('/login');;
      }
    const Profile = () => {
        navigate('/profile');
    }
    const Feedback = () => {
        navigate('/feedback');
    }
    return(
        <>
        <div className="navbar bg-[#171a1f] px-[1vw] py-2">
            <div className="flex flex-row gap-[40vw]">
                <div className="flex flex-row gap-6">
                    <div onClick={goHome} className="nav-logo flex flex-row gap-3 text-[#fff] items-center">
                        <img src="./logoPrim.svg" alt="logo" className="logo w-[3vw] duration-150 hover:scale-[110%] hover:duration-150"/>
                        <p className="  text-[4vh] breathAnim duration-150 hover:scale-[110%] hover:duration-150 rounded-md">AgroShield</p>
                    </div>
                    <div className="navRightEl flex flex-row text-[#a8adb7] items-center text-[2.3vh]">
                        <span onClick={Dashboard}>Dashboard</span>
                        <span onClick={Reports}>Reports</span>        
                        <span onClick={Alerts}>Alerts</span>
                        <span onClick={Feedback}>Feedback</span>
                    </div>
                </div>
                <div className="flex flex-row items-center text-[#fff] gap-5">
                    <button className="btn bg-[#6d31ed] rounded-md px-[2.3vw] py-[1vh] anim" onClick={Login}>Login</button>
                    <img src="./bell.svg" alt="user" className="user w-[2.2vw] anim" onClick={Alerts}/>
                    <div className="rounded-[100%] bg-[#fff] w-[4vh] h-[4vh] anim" onClick={Profile}></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;