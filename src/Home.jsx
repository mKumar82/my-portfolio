
import { useEffect } from 'react';
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'

const Home = () => {


  // const data = {
  //   name:"HomePage",
  //   image:"/images/herosectionHome.jpg",
  //  };

  const {updateHomePage} = useGlobalContext();

  useEffect(()=>updateHomePage(),[]);
  return <HeroSection/>
}

export default Home
