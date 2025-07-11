import React from 'react'
import { Link } from 'react-router'

import navlogo from '../assets/image/logo.png'
import { RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";



const Navbar = () => {
return (
<>



    <div className='container py-[27px]'>


        <div className='nav_row flex justify-between items-center'>

            <Link className='nav_logo'><img src={navlogo} alt="" className='w-[119px]' /></Link>



            <div
                className="navsrach w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px]">

                <RiSearch2Line className='text-2xl text-prymary' />

                <input type="text" className='w-full text-[16px] outline-none border-none text-prymary '
                    placeholder='Search in products... ' />

            </div>


            <div className="nav_icon flex items-center  w-[78px]">

                <RiUserLine className='text-2xl mr-[10px] cursor-pointer' />
                <RiShoppingCartLine className='text-2xl relative cursor-pointer' />

                <div
                    className='  right-[204px] top-[32px] w-[20px] h-[20px] bg-[#0EA5E9] rounded-full text-[14px] text-white flex justify-center items-center absolute'>
                    3</div>
            </div>

                  
        </div>



    </div>


</>
)
}

export default Navbar