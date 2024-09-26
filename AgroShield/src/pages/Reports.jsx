import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/analysis')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='content ml-[20%] mt-[12vh] mr-[2vw]'>
        <div className='text-[4.5vh] text-bold'>
          Reports
        </div>
        <div className='mt-5'>
          {reports.map(report => (
            <div key={report._id} className='mb-3'>
              <div className='bg-[#171a1f] w-[66%] p-1 rounded-md flex flex-col justify-center items-center gap-8'>
              <div className='flex flex-row items-center gap-10'><span className='text-[4vh]'>{report.name}</span>, <span>{report.date}</span></div>
              <button 
                onClick={() => handleButtonClick(report.url)} 
                className='px-5 py-4 rounded-md w-[20%]  bg-[#431e91] duration-300 hover:transition-150 hover:scale-[110%]'>
                Open Report 
              </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Reports;