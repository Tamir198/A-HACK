import React, { useState,useEffect } from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import WebFont from 'webfontloader';

const NavBar = () => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto', 'sans-serif']
          }
        });
       }, []);
    
    const[toggle, setToggle] = useState(false)
  return (
    <nav className="app_navbar">
        <div className="app_navbar_menu">
        <h1 className='dashBoard-h1'>DashBoards</h1>
            <div>
                <ul className="app_navbar_links">
                    {['Admin','Developer','Devops','Anylast'].map((item)=>(

                        <li className="p-text flex" key={item}>
                            <a href={`#${item}`} onClick={()=>{setToggle(false)}}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar