import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function History() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        if (Array.isArray(response.data)) {
          setReports(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='content ml-[20%] mt-[12vh]'>
        <div className='text-[4.5vh] font-bold mb-8'>
          History
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {reports.map((report, index) => (
            <div key={index} className='p-6 bg-white rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>{report.title}</h3>
              <p className='text-gray-600 mb-4'>{report.description}</p>
              <a href={report.link} className='text-blue-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                View Report
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default History;