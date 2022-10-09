import React,{useState,useEffect} from 'react'
import './LandingPage.css'
import Navbar from '../../component/Navbar/Navbar'
import Features from '../../component/Features/Features'
import Home from '../../component/Home/Home'
import Footer from '../../component/Footer/Footer'
const LandingPage = () => {
   const [load,IsLoaded] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      IsLoaded(true);
    },4000)
  },[])
  return (
    <div className='landing-page-container'>
      {
      !load  ? 
      <div className='pre-loader'>
        <h1>FOSSIL GEN5</h1>
       </div>
        :
        <div className="content"> 
        <Navbar />
        <Home />
        <Features />
        <Footer />
        </div>
      }
      </div>
  )
}

export default LandingPage