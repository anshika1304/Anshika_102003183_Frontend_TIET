import React from 'react'
// import {BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
// import { BarChart, Bar, Rectangle, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import trendIcon from './trend.png';
import  AreaChart1 from './AreaChart1';
import BarChart1 from './BarChart';
import Featured from './Featured'
import Table from './Table'
import Queries from './Queries'
import WeeklySales from './WeeklySales'

function Home() {


  return (
    <main className='main-container'>
        {/* <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div> */}
        <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>Impressions</h3>
                <img src={trendIcon} alt="Trend Icon" className='card_icon'/>
            </div>
            <h3>832</h3>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Total Audience</h3>
                <img src={trendIcon} alt="Trend Icon" className='card_icon'/>
            </div>
            <h3>832</h3>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Engagements</h3>
                <img src={trendIcon} alt="Trend Icon" className='card_icon'/>
            </div>
            <h3>832</h3>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Engaged Audience</h3>
                <img src={trendIcon} alt="Trend Icon" className='card_icon'/>
            </div>
            <h3>832</h3>
        </div>
    </div>
    <div>
        <AreaChart1/>
        <BarChart1/>
        <Featured/>
        <Table/>
        <Queries/>
        <WeeklySales/>
    </div>
    </main>
  )
}

export default Home
