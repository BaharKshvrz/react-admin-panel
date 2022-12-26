import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./user.css";

const User = () => {
  return (
    <div className='user'>
          <div className="userTitleContainer">
              <h1 className='userTitle'>Edit User</h1>
              <button className="userAddButton">
                  <Link to="/newUser">Create a User</Link>
              </button>
          </div>

          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                      <img src="/images/users/1.jpg" alt="" className='userShowImg'/>
                      <div className="userShowTopTitle">
                          <span className="userShowUsername">Kevin Tracy</span>
                          <span className="userShowUserTitle">Software Enginner</span>
                      </div>
                  </div>
                  <div className="userShowBottom">
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                         <PermIdentity className="userShowIcon"/>
                         <span className="userShowInfoTitle">annabeck99</span>
                      </div>

                      <div className="userShowInfo">
                         <CalendarToday className="userShowIcon"/>
                         <span className="userShowInfoTitle">11.05.1999</span>
                      </div>

                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                         <PhoneAndroid className="userShowIcon"/>
                         <span className="userShowInfoTitle">+1 123 456 789</span>
                      </div>

                      <div className="userShowInfo">
                         <MailOutline className="userShowIcon"/>
                         <span className="userShowInfoTitle">annabeck@gmail.com</span>
                      </div>

                      <div className="userShowInfo">
                         <LocationSearching className="userShowIcon"/>
                         <span className="userShowInfoTitle">New York | USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label htmlFor="username">Username</label>
                              <input
                                  type="text"
                                  id="username"
                                  placeholder='annabeck99'
                                  className='userUpdateInput'
                              />
                          </div>
                          
                          <div className="userUpdateItem">
                              <label htmlFor="fullName">Full Name</label>
                              <input
                                  type="text"
                                  id="fullName"
                                  placeholder='Anna Beck'
                                  className='userUpdateInput'
                              />
                          </div>
                          
                          <div className="userUpdateItem">
                              <label htmlFor="email">Email</label>
                              <input
                                  type="email"
                                  id="email"
                                  placeholder='annabeck@gmail.com'
                                  className='userUpdateInput'
                              />
                          </div>
                          
                          <div className="userUpdateItem">
                              <label htmlFor="phone">Phone No</label>
                              <input
                                  type="text"
                                  id="phone"
                                  placeholder='+1 123 456 789'
                                  className='userUpdateInput'
                              />
                          </div>
                          
                          <div className="userUpdateItem">
                              <label htmlFor="address">Address</label>
                              <input
                                  type="text"
                                  id="address"
                                  placeholder='New York | USA'
                                  className='userUpdateInput'
                              />
                         </div>
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img src="/images/users/1.jpg" alt="" className='userUpdateImg'/>
                              <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                              <input type="file" id="file" style={{display: "none"}} />
                          </div>
                          <button className='userUpdateButton'>Update</button>   
                      </div>
                 </form>
              </div>
          </div>
    </div>
  )
}

export default User
