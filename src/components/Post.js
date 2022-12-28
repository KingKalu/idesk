// import React from 'react'
import './Post.scss'
import more from '../assets/more.png'
import coder from '../assets/coder.png'
import country from '../assets/country.png'
import eye from '../assets/eye.png'
import comment from '../assets/comment.png'
import like from '../assets/like.png'
import bookmark from '../assets/bookmark.png'
import mail from '../assets/mail.png'
import Head from './Head'



const Post = () => {
  return (
    <div className="post">
        <div className='header'>
            <Head />
            <img src={more} />
        </div>
        <div className='postmain'>
          <br/>
          <div className='bookmail' >
            <div className='left'>
                <span><img src={coder} />Epic Coder</span>
                <span><img src={country} />Nigeria</span>
            </div>
            <div className='right'>
                <span><img src={bookmark} /></span>
                <span><img src={mail} /></span>
            </div>
          </div>
          <br/>
          <h3>Senior Wordpress Developer</h3>
          <br/>
          <div ><span className='worktime'>FullTime</span>  <strong>530/hr</strong></div>
          <br/>
          <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images... <span>view more</span></p>
          <br/>
            <ul className='skill'>
              <li>HTML</li>
              <li>PHP</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Wordpress</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Corel Draw</li>
            </ul>
        </div>
        
        <div className='emotion'>
          <div>
            <span><img src={like} /> Like</span> <span className='people'>50</span> <span><img src={comment} /> Comments 15</span>
          </div>
          <span><img src={eye} /> Views 50</span>
        </div>
    </div>
  )
}

export default Post