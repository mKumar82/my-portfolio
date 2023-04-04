import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context';

const About = () => {
//  const data = {
//   name:"AboutPage",
//   image:"/images/aboutimg.jpg",
//  };


const {updateAboutPage} = useGlobalContext();

useEffect(()=>updateAboutPage(),[]);
  return <HeroSection/>
}

export default About
