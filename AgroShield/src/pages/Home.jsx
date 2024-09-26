import React, { useState, useEffect} from 'react';
import './Home.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Card from '../components/card';
import EmCard from '../components/emCard';

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className='content ml-[20%] mt-[12vh]'>
        <div className='flex flex-col gap-10'>
          <div classname="flex flex-col gap-5">
          <div className='text-[4.5vh] text-bold'>
            Latest Statisitics
          </div>
          <div className='flex flex-row flex-wrap gap-10 ml-10 mt-[6vh]'>
            <Card title={"Total reports"} description={"1200"} img={"./lineChart.svg"} />
            <Card title={"Weekly reports"} description={"300"} img={"./chart.svg"} />
            <Card title={"Emergency Reports"} description={"50"} img={"./chart.svg"} />
          </div>
          </div>
          <div className='text-[4.5vh] text-bold'>
            Emergency Cases
          </div>
            <div className='flex flex-row overflow-x-scroll gap-5 ml-[3vw]'>
              <EmCard title={"Heart Attack"} description={"Patient is suffering from heart attack"} img={"https://picsum.photos/200"} />
              <EmCard title={"Accident"} description={"Patient is suffering from accident"} img={"https://picsum.photos/200"} />
              <EmCard title={"Accident"} description={"Farmer Dies of Ligma"} img={"https://picsum.photos/200"} />
              <EmCard title={"Heart Attack"} description={"Patient is suffering from heart attack"} img={"https://picsum.photos/200"} />
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Home