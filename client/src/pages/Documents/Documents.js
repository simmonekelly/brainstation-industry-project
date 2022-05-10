import React from 'react';
import './Documents.css'
import resourceslogo from '../../Assets/images/Resources_Icon.svg'
import eventsIcon from '../../Assets/images/Events_Icon.svg'
import socialIcon from '../../Assets/images/Social_Icon.svg'
import { Link } from 'react-router-dom';
import arrow from '../../Assets/images/Fowardarrow_Icon.svg'




function Documents() {
    return (
        <div className='data-container'>
            <div className='mini-container'>
                <div className='homepage_logo'> <img src={resourceslogo} alt='Logo'></img></div>
                <div className='homepage_titletext'>
                   <h1>Resources</h1>
                   <p>One to find all the documents related to the company </p>
               </div>
               <div className='textbox_container'>
                   <h4>Return to Work Policy</h4>
                   <Link to=''><div className='textbox_minicontainer'>
                       <div className='textbox_text'><h4>Hybrid work arrangement at company</h4>
                       <p>Jan 22 2021</p></div>
                       <div className='textbox_arrow'><img src={arrow}></img></div>
                   </div></Link>
                   <Link to=''><div className='textbox_minicontainertwo'>
                        <div className='textbox_text'><h4>Hybrid working is based on effective communication. </h4>
                       <p>Jan 02 2021</p></div>
                       <div className='textbox_arrow'><img src={arrow}></img></div>
                   </div></Link>
                </div>
                   <div className='footer_container'>
                        <h4>Employee Onboarding</h4>
                        <Link to=''><div className='footer_textbox'>
                        <div className='textbox_text'><h4>Employee benefits and handbook for new employees </h4>
                       <p>Jan 22 2021</p></div>
                       <div className='textbox_arrow'><img src={arrow}></img></div>
                        </div></Link>
                    </div>
            </div>
            {/* second container start here */}
            <div className='mini-container'>
               <div className='homepage_logo'> <img src={eventsIcon} alt='Logo'></img></div>
               <div className='homepage_titletext'>
                   <h1>Events</h1>
                   <p>Discover all the upcoming events hosted by the company - online and offline</p>
               </div>
               <div className='textbox_containertwo'>
                   <h4>Upcoming events</h4>
                   <div className='events_textbox'>
                       
                        <div className='events_detail'>
                        <Link to=''>
                            <div className='event_Text'><h4>How to maintain work life balance while working remotely</h4>
                            <div className='textbox_arrow'><img src={arrow}></img></div>
                            </div>
                        </Link> 
                            <hr></hr>
                            <ul>
                                <div className='list-icon'><img src={eventsIcon} alt='ss'></img><li> May 23 2022</li></div>
                                <div className='list-icon'><img src={socialIcon} alt='ss'></img><li>4pm - 5pm est</li></div>
                                <div className='list-icon'><img src={socialIcon} alt='ss'></img><li>On-campus (Streamed live)</li></div>
                            </ul>
                    
                        </div>
                        <div className='events_detail'>
                        <Link to=''>
                        <div className='event_Text'><h4>Mental health awareness and benefits </h4>
                        <div className='textbox_arrow'><img src={arrow}></img></div>
                        </div>
                        </Link> 
                            <hr></hr>
                            <ul>
                                <div className='list-icon'><img src={eventsIcon} alt='ss'></img><li>June 03 2022</li></div>
                                <div className='list-icon'><img src={socialIcon} alt='ss'></img><li>4pm - 5pm est</li></div>
                                <div className='list-icon'><img src={socialIcon} alt='ss'></img><li>Online streamed live</li></div>
                            </ul>
                    
                        </div>
                   </div>
                </div>
                   
            </div>
            {/* third container start here */}
            <div className='mini-container'>
                <div className='homepage_logo'> <img src={socialIcon}alt='Logo'></img></div>
                <div className='homepage_titletext'>
                   <h1>Social</h1>
                   <p>A place for questions, discussions and polls</p>
               </div>
               <div className='textbox_container'>
                   <h4>Trending questions</h4>
                   <Link to=''><div className='textbox_thirdcontainer'>
                       <div className='arrow_container'><h4>How are you all managing with high inflation?</h4>
                       <div className='view_comments'>
                          <div className='views_container'> <img src={eventsIcon }></img> <p>1103 views</p></div>
                           
                          <div className='comments_container'> <img src={eventsIcon }></img><p>122 comments</p></div>
                          
                        </div>
                        
                        </div>
                        <div className='textbox_arrow'><img src={arrow}></img></div>
                   </div></Link>
                   <Link to=''><div className='textbox_thirdcontainer'>
                   <div className='arrow_container'><h4>People who won the free golf ticket, how was the resort?</h4>
                       <div className='view_comments'>
                          <div className='views_container'> <img src={eventsIcon }></img> <p>1103 views</p></div>
                           
                          <div className='comments_container'> <img src={eventsIcon }></img><p>122 comments</p></div>
                          </div>
                        </div>
                        <div className='textbox_arrow'><img src={arrow}></img></div>
                   </div></Link>
                </div>
                   <div className='footer_containerthree'>
                        <h4>Recent  polls</h4>
                        <Link to=''> <div className='footer_textbox'>
                        <div className='arrow_container'><h4>Did you all like your christmas gifts from the company?</h4>
                       <div className='view_comments'>
                          <div className='views_container'> <img src={eventsIcon }></img> <p>1103 views</p></div>
                           
                          <div className='comments_container'> <img src={eventsIcon }></img><p>122 comments</p></div>
                          </div>
                        </div>
                        <div className='textbox_arrow'><img src={arrow}></img></div>
                        </div></Link>
                    </div>
            </div>
            
        </div>
    );
};

export default Documents;