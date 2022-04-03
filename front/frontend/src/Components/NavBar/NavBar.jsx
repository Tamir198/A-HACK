import React, { useState } from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {SiAzuredevops} from 'react-icons/si'
import {RiAdminLine} from 'react-icons/ri'
import {BsClipboardData} from 'react-icons/bi'
import {MdDeveloperMode} from 'react-icons/md'

const NavBar = () => {

    const[toggle, setToggle] = useState(false)
  return (
    <nav className="app_navbar">

            <div className="app_navbar_menu">
                
                    <motion.div 
                    whileInView={{x:[300,0]}}
                    transition={{duration:0.85,ease:'easeOut'}}>
                        <HiX onClick={()=>setToggle(false)}/>
                        <ul className="app_navbar_links">
                            {['Admin','Developer','Devops','Anylast'].map((item)=>(
                                <li className="p-text flex" key={item}>
                                    <a href={`#${item}`} onClick={()=>{setToggle(false)}}>{item}</a>
                                    <MdDeveloperMode/>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
            </div>
    </nav>
  )
}

export default NavBar