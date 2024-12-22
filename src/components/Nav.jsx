import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Nav.css';
import Button from '@mui/material/Button';
import { TfiMenu } from 'react-icons/tfi';
import { MdClose } from "react-icons/md";

function Nav() {
  const [menu, setMenu] = useState(false);

  function handleMenuToggle() {
    setMenu(!menu);
  }

  return (
    <nav className="w-full flex justify-between items-center p-1 px-8 shadow-md z-10 relative sm:fixed top-0 bg-white">
      <div className="h-16 overflow-hidden">
        <img className="h-5/6" src={Logo} alt="" />
      </div>
      <div className={`sm:static bg-white p-4 rounded flex items-center justify-center gap-4 flex-col sm:flex-row absolute right-3 top-16 ${
          menu ? "flex" :"hidden sm:flex"
        }`}>
        <ul className="flex gap-6 items-center font-semibold sm:flex-row flex-col">
          <li>
            <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              Contact
            </NavLink>
          </li>
        </ul>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'black',
            color: 'black',
            fontSize: '12px',
            borderRadius: '0px',
            '&:hover': {
              borderColor: 'black',
              backgroundColor: 'transparent',
              boxShadow: '0px 0px 1px black',
            },
          }}
        >
          Get Started
        </Button>
      </div>
      <div className="sm:hidden block">
        <div  onClick={handleMenuToggle} >{menu ? <MdClose className='font-bold text-[22px]'/> : <TfiMenu/>}</div>
        
      </div>
    </nav>
  );
}

export default Nav;
