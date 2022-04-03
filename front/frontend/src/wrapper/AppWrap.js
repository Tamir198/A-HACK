import React from 'react'
import {images} from '../constants'
import {GrContact} from 'react-icons/gr'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {SiBookstack} from 'react-icons/si'
import '../App.css'
const AppWrap = (Component, idName) => function HOC() {
  return (
    <div id={idName}>
  
      <div className="login-section">
          <div className='section__Login'>
              <Component/>
          </div>
        </div>

        <img className="Hebet_logo" src={images.Hebet}/>
    </div>
  )
}

export default AppWrap