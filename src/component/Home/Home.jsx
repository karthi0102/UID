import React from 'react'
import './Home.css'
import picture from '../../assets/images/girl-fossil.webp'
const Home = () => {
  return (
        <div className="home-container">
          <div className="header">
            <p>FOSSIL FOR YOU NEXT GEN WATCHES...</p>
          </div>
           <div className="img-container">
                <img src={picture} alt="fossil" />
           </div>

           <div className="img-content">
            <h4>GEN 5</h4>
            <h2>WATCH WHAT YOU</h2>
            <h2>CAN DO</h2>
            <h3>Discover all of the unexpected things <br />
            you can do right from your wrist.
            </h3>
           </div>
        </div>
  )
}

export default Home