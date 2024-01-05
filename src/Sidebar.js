import React from 'react'
import adminIcon from './admin.jpg';
import sidebarImage from './sidebar.jpg';

import {BsCart3, BsHouseDoor, BsPlayCircle, BsCalendar4, BsBook, BsPuzzle, BsChatLeft, BsGraphUpArrow, BsWallet, BsPerson} from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={adminIcon} alt="Admin Icon" style={{ width: '40px', height: '40px' }} className='icon_header'/> Skillify Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>xyz</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsHouseDoor className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPlayCircle className='icon'/>My Course
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCalendar4 className='icon'/>Calender
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBook className='icon'/>Resource
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPuzzle className='icon'/>Quiz
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsChatLeft className='icon'/>Message
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGraphUpArrow className='icon'/>My Status
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsWallet className='icon'/>Wallet
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPerson className='icon'/>My Account
                </a>
            </li>
        </ul>
        <div className='sidebar-image'>
            <img src={sidebarImage} alt="Sidebar Image" style={{ width: '75%', height: 'auto', display: 'block', borderRadius: '10px' }} />
            <h5>Skilify Teacher Dashboard Admin</h5>
            <h6>© 2023 All rights reserved</h6>
        </div>
    </aside>
  )
}

export default Sidebar
