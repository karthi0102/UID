import React from 'react'
import './Features.css'
import watch from '../../assets/images/watch.webp'
const Features = () => {
  return (
    <div className='feature-container'>
        <p>Features</p>
        <img src={watch} alt="" />
        <div className="feature-content">
            <h1>MULTI-DAY <br/> BATTERY MODES</h1>
            <p>Charge your smartwatch in an hour, and extend yout <br /> battery lifr fot multiple days with smart battery modees</p>
            <h2>Daily Mode</h2>
            <p>Use most features daily, <br /> and charge nightly</p>
            <h2>Extended Mode</h2>
            <p>Use only essential featured daily <br /> amd charge few days</p>
            <h2>Time Only mode</h2>
            <p>Turn your smartwatch into a simple , <br /> clock that lasts over a week</p>
            <h2>Custom Mode</h2>
            <p>Customise your system settings , and pick <br /> the features that are important to you</p>
        </div>
    </div>
  )
}

export default Features