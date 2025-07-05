import React from 'react'
import { Link } from 'react-router'

import navlogo from '../assets/image/logo.png'

const Navbar = () => {
  return (
    <>
    
    

    <div className='container py-[27px]'>


    <div className='nav_row'>

<Link className='nav_logo' ><img src={navlogo} alt=""  className='w-[119px]'/></Link>



<div className="navsrach"></div>


<div className="nav_icon"></div>


    </div>



    </div>
    
    
    </>
  )
}

export default Navbar