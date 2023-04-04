import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Styles/Button';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";


const Footer = () => {

  const goTop =()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'});

  }
  return <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div id='getStarted' onClick={goTop}>
            <NavLink to='./contact'>
              <Button >Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className='footer-about'>
            <h3>&lt;dev&gt;Manish</h3>
            <p>Full Stack Developer</p>
            <p>MERN Stack</p>
            <p>Reactjs</p>
            <p>Nodejs Expressjs </p>
            <p>Java</p>
          </div>
          <div className='footer-subscribe'>
            <h3>Kumar &lt;/dev&gt;</h3>
            <form action="#">
              <input type="email" placeholder='Email' autoComplete='off'/>
              <input type="submit" value='subscribe' />
            </form>
          </div>
          <div className='footer-social'>
            <h3>Follow us</h3>
            <div className="footer-social-icons">
              <div>
                <FaGithub className='icons'/>
              </div>
              <div>
                <FaInstagram className='icons'/>
              </div>
              <div>
                <FaLinkedin className='icons'/>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call me</h3>
            <h3>+91 9811475054</h3>
          </div>
        </div>
      

      <div className="footer-bottom-section">
        <hr />
        <div className="container grid grid-two-column">
          <p>
            @{new Date().getFullYear()} MK dev All Rights Reserved
          </p>
          <div>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
        </div>
        
      </div>
      </footer>
  </Wrapper>
}

const Wrapper = styled.section`
#getStarted{
  padding-left:12rem;
}
.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
}
.contact-short-btn {
  justify-self: end;
  align-self: center;
}
footer {
  padding: 16rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social-icons {
    display: flex;
    gap: 2rem;
    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }
  .footer-bottom-section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }
  footer .footer-bottom--section {
    padding-top: 3.2rem;
  }
}
`;
export default Footer
