import React from "react";
import './sidebar.css'
import { useNavigate } from "react-router-dom";
function Sidebar(){
    const navigate = useNavigate();
    const Dashboard = () => {
        navigate('/');
    }
      const Reports = () => {
        navigate('/reports')
      };
      const History = () => {
        navigate('/history')
      };
      const Feedback = () => {
        navigate('/feedback')
      };
    return(
        <>
            <div className="w-[15%] h-[100%] fixed">
                <div className="text-[#9095a1]">
                    <button className="hovAnim flex flex-row items-center px-6 py-2 gap-2" onClick={Dashboard}>
                        <img src="./dashboard.svg" alt="dashboard" className="w-[2.5vw]"/>
                        <span className="text-[2.3vh]">Dashboard</span>
                    </button>
                    <button className="hovAnim flex flex-row items-center px-6 py-2 gap-2" onClick={Reports}>
                        <img src="./report.svg" alt="reports" className="w-[2.5vw]"/>
                        <span className="text-[2.3vh]">Reports</span>
                    </button>
                    <button className="hovAnim flex flex-row items-center px-6 py-2 gap-2" onClick={History}>
                        <img src="./history.svg" alt="history" className="w-[2.5vw]"/>
                        <span className="text-[2.3vh]">History</span>
                    </button>
                    <button className="hovAnim flex flex-row items-center px-6 py-2 gap-2" onClick={Feedback}>
                        <img src="./feedback.svg" alt="feedback" className="w-[2.5vw]"/>
                        <span className="text-[2.3vh]">Feedback</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Sidebar;