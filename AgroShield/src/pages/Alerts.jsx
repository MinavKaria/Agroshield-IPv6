import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Alert from '../components/alert';

function Alerts() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // Fetch alerts from the database
        const fetchAlerts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/alert');
                console.log('Response:', response); // Log the response
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                
                console.log('Fetched data:', result);
                const k=[result] 
                setAlerts(k)
                console.log(k.length)
            } catch (error) {
                console.error('Error fetching alerts:', error);
            }
        };
    
        fetchAlerts();
    }, []); // Effect runs only once after the component mounts

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='content ml-[20%] mt-[12vh] mr-[2vw]'>
                <div className='text-[4.5vh] text-bold'>
                    Alerts
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    {alerts.length > 0 && alerts.map((alert, index) => (
                        <Alert
                            key={index}
                            location={alert.location}
                            name={alert.name}
                            reason={alert.reason}
                            severity={alert.severity}
                            assignee={alert.assignee}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Alerts;
