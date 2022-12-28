// import React from 'react'
import './page.scss'
import isaac from '../assets/isaac.jpg'
import logo from '../logo.svg'
import more from '../assets/more.png'
import Post from '../components/Post'
import Side from '../components/Suggestions'

const Page = () => {
  return (
    <main className='wrapper'>
        <div className='main'>
            <div className='leftbox'>
                <div className='profile'>
                    <div className='box'>
                        <div className='redbg'>

                        </div>
                        <img src={isaac} />
                        
                    </div>
                    <div className='infobox'>
                            <div className='statinfo'>
                                <h4>Isaac Kalu</h4>
                                <small>Frontend Web developer</small>
                            </div>
                            <div className='statinfo'>
                                <h4>Following</h4>
                                <small>34</small>
                            </div>
                            <div className='statinfo'>
                                <h4>Followers</h4>
                                <small>155</small>
                            </div>
                            <div className='viewprofile'>
                                <p>View Profile</p>
                            </div>
                    </div>
                </div>

                <div className='suggestion'>
                    <div className='sidehead'>
                        <h4>Suggestions</h4> <img src={more} />
                    </div>
                    <div className='sidebody'>
                        
                    </div>
                    <div className='viewmore'>
                        <p><strong>View More</strong></p>
                    </div>
                </div>
                
            </div>
            <div className='middlebox'>
                <div className='createpost'>
                    <img src={isaac} />
                    <div>
                        <button>Post a Project</button>
                        <button>Post a Job</button>
                    </div>
                </div>

                <Post />
                
            </div>
            <div className='rightbox'>
                <div className='identity'>
                    <div>
                        <img src={logo} />
                        <h4>Track Time on Workwise</h4>
                        <small>Pay only for the hours worked</small>
                    </div>
                    <div>
                        <h4>Sign up</h4>
                        <p>Learn More</p>
                    </div>
                </div>

                <div className='mostviewed'>
                    <div className='sidehead'>
                        <h4>Most Viewed People</h4> <img src={more} />
                    </div>
                    <div className='sidebody'>
                        
                    </div>
                    <div className='viewmore'>
                        <p><strong>View More</strong></p>
                    </div>
                </div>

            </div>
        </div>    
    </main>
  )
}

export default Page