import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components' 
import { Button } from '../Styles/Button';
import { useGlobalContext } from '../Context';



const HeroSection = () => {

    const {name,image,para} = useGlobalContext();

  return <Wrapper>
    <div className="container grid grid-two-column">
        <div className="section-hero-data">
            {/* <p className='hero-top-data'>Hi,</p> */}
            <h2 className='hero-heading'>{name}</h2>
            <p className='hero-para'>
              {para.main_para} <br/>
             <h2> {para.skills}</h2><br/>             
              {para.frontend}<br/>
              {para.frontend_framework}<br/>
              {para.backend}<br/>
              {para.backend_framework}<br/>
              {para.database}
            </p>
        
        
        <div className="grid grid-two-column">
        <Button className='btn hireme-btn'>
            <NavLink to='/about' >About me</NavLink>
        </Button>
        
        
        <a href="src\assets\MyResume.pdf" download="manishResume">
          <Button className='btn ' id='cv'>Download CV</Button>
        </a>
        </div>
        </div>
        <div className="section-hero-image">
            <img id='homeImage' src={image} alt='homeimg'/>
        </div>
    </div>
  </Wrapper>
}
export default HeroSection

const Wrapper = styled.section`
padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #homeImage{
    border-radius:50%;
    // margin-top:-20%;
  }
  #cv{
    max-width:20rem;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }`;


