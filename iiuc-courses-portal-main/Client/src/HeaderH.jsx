import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from './Auth/AuthContext';
import userPic from './assets/Icons/user.png'


const HeaderH = () => {
  const { signOutUser, user, theme, setTheme } = useContext(AuthContext);
  const themeController = (event) => {
    setTheme(event.target.checked);
    // console.log(event.target.checked);
  }
  const gifTheme = (
    <label className="swap swap-rotate size-14 ">
      {/* this hidden checkbox controls the state */}
      <input onChange={themeController} type="checkbox" defaultChecked={theme} className="theme-controller" value="synthwave" />

      {/* sun icon */}
      ` <svg
        className="swap-off size-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>`

      {/* moon icon */}
      <svg
        className="swap-on size-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
    )
  
  // console.log(theme);
  // const UserPop = () => {
  //   return (

  //   )
  // }

  // className={`${theme==false?"bg-[#f3ebe5]":"bg-[#00B4D8]"}`}
  const headerItems = (
    <><li><NavLink to="/" className={`px-3 lg:mr-2 lg:mb-0 mb-2  ${theme == false ? "bg-[#f3ebe5]" : "bg-[#00B4D8]"}`}>Home</NavLink></li>
      <li><NavLink to="/find-tutors" className={`px-3 lg:mr-2 lg:mb-0 mb-2 ${theme == false ? "bg-[#f3ebe5]" : "bg-[#00B4D8]"}`} >Find tutors</NavLink></li>
      <li><NavLink to="/add-tutorials" className={`px-3 lg:mr-2 lg:mb-0 mb-2 ${theme == false ? "bg-[#f3ebe5]" : "bg-[#00B4D8]"}`}>Add Tutorials</NavLink></li>
      <li><NavLink to="/my-tutorials" className={`px-3 lg:mr-2 lg:mb-0 mb-2 ${theme == false ? "bg-[#f3ebe5]" : "bg-[#00B4D8]"}`}>My Tutorials</NavLink></li>
      <li><NavLink to="/my-booked-tutors" className={`px-3 lg:mr-2 lg:mb-0 mb-2 ${theme == false ? "bg-[#f3ebe5]" : "bg-[#00B4D8]"}`}>My booked tutors</NavLink></li>
      {
        user ? <li><button onClick={signOutUser} className='btn-sm'>Logout</button></li> : <li><NavLink to="/login" className="px-3">Login</NavLink></li>
      }

    </>
  );

  return (
    <div
  className={`flex ${
    theme === false ? "bg-[#f3ebe5]" : "bg-[#2b2b2b]"
  } md:m-10 rounded-lg md:p-2 text-[#09050e] mb-10`}
>
  {/* Navbar Start */}
  <div className="navbar-start">
    {/* Mobile Dropdown */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {headerItems}
        {gifTheme}
      </ul>
    </div>
    {/* Logo */}
    <a className="btn btn-ghost text-xl absolute">TutorNest</a>
  </div>

  {/* Navbar Center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{headerItems}</ul>
  </div>

  {/* Navbar End */}
  <div className="navbar-end flex items-center">
    {/* User Avatar Dropdown */}
    <div className="dropdown dropdown-end lg:ml-0 md:ml-64 ml-24">
      <div tabIndex={0}>
        <img
          className="w-10 h-10 rounded-full"
          src={user ? user.photoURL : userPic}
          alt="User Avatar"
        />
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content ${
          theme === false ? "bg-white" : "bg-[#3c3c3c]"
        } text-sm menu rounded-box z-[1] p-2 shadow w-40`}
      >
        <li>
          <a className={theme === false ? "text-black" : "text-white"}>
            {user ? user.displayName : "Guest"}
          </a>
        </li>
      </ul>
    </div>

    {/* Theme Toggle */}
    <div className="size-14 lg:flex pt-5 pb-0 hidden">{gifTheme}</div>
  </div>
</div>

  );
};

export default HeaderH;