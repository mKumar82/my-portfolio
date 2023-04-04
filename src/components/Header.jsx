import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Mainheader>
        <NavLink to="/">
            <img src='./images/logo.jpg' alt='logo' className='logo'/>
        </NavLink>
        <Navbar/>
    </Mainheader>
  )
}
const Mainheader= styled.header`
    padding:0 4.8rem;
    height:10rem;
    background-color: ${({theme})=>theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;

    .logo{
        width: 30%;
        height: auto;
    }

`;

export default Header
