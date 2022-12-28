// import React from 'react'
import logo from '../logo.svg';
import home from '../assets/home.png'
import company from '../assets/company.png'
import search from '../assets/search.png'
import project from '../assets/project.png'
import profile from  '../assets/profile.png'
import job from '../assets/job.png'
import notification from '../assets/notification.png'
import message from '../assets/message.png'
import arrowDown from '../assets/arrow-down.png'
import isaac from '../assets/isaac.jpg'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <nav>
                <div className='logoSearchBox'>
                    <img className='logopic' src={logo} />
                    <div className='searchBox'>
                        <input type='text' placeholder='Search...' />
                        <div><img className='searchpic' src={search} /></div>
                    </div>
                </div>
                <div className='navigation'>
                    <div>
                        <img src={home} />
                        <span>Home</span>
                    </div>
                    <div>
                        <img src={company} />
                        <span>company</span>
                    </div>
                    <div>
                        <img src={project} />
                        <span>Project</span>
                    </div>
                    <div>
                        <img src={profile} />
                        <span>Profile</span>
                    </div>
                    <div>
                        <img src={job} />
                        <span>job</span>
                    </div>
                    <div>
                        <img src={message} />
                        <span>message</span>
                    </div>
                    <div>
                        <img src={notification} />
                        <span>notification</span>
                    </div>
                </div>
                <div className='navprofile'>
                    <img src={isaac} />
                    <span>Isaac <img src={arrowDown} /></span>
                </div>
        </nav>
    </div>
  )
}

export default Navbar