import React from 'react'
import './Assingment3.css'
import Navbar3 from '../../component/Navbar3/Navbar3'
import Text2 from '../../component/Text2/Text2' 
import gen2 from '../../assets/images/gen2.jpg'
import gen3 from '../../assets/images/gen3.jpg'
import gen4 from '../../assets/images/gen4.jpg'
import gen5 from '../../assets/images/gen5.jpg'
import gen6 from '../../assets/images/gen6.jpg'
import Footer from '../../component/Footer/Footer'
import Card3 from '../../component/Card3/Card3'
const Assingment3 = () => { 
  const specs = {
     Brand:'Fossil',
    Shape :`Circular, Curved`,
    BodyMaterial	:'Stainless Steel',
    StrapMaterial	:'Silicon',
    Colours:'Black',
    OperatingSystem	:'Android, iOS',
    BoxContents	:'Smart Watch, User Manual, Warranty Card',
  }
  const watch =[
    {
    img:gen2,
    title:'FOSSIL SMART WATCH GEN2' ,
    prize:`₹10000`,
  },
  {
    img:gen3,
    title:'FOSSIL SMART WATCH GEN3' ,
    prize:`₹14000`,
    
  },
  {
    img:gen4,
    title:'FOSSIL SMART WATCH GEN4' ,
    prize:`₹20000`,
    
  },
  {
    img:gen5,
    title:'FOSSIL SMART WATCH GEN5' ,
    prize:`₹22000`,
    
  },
  {
    img:gen6,
    title:'FOSSIL SMART WATCH GEN6' ,
    prize:`₹26000`,
    
  }
]
  return (
    <div className='Assingment-3-container'>
        <Navbar3 />
        <Text2 msg="STATE AND PROPS"/>
        <Card3 watch={watch} specs={specs}/>
        <Footer />
    </div>
  )
}

export default Assingment3

