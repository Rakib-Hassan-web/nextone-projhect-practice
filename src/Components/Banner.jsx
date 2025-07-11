import React from 'react'

import bannerbg from '../assets/image/bannerimg.png'
import { Link } from 'react-router'
import { CiSearch } from 'react-icons/ci'

const Banner = () => {
  return (
 <>


<section id='banner'    style={{background: `url(${bannerbg})` ,backgroundRepeat: 'no-repeat' ,backgroundPosition:'center' ,backgroundSize:'cover'}} className='py-[148px] w-ful'>


    <div className="container">
        <h2>Starting from: $49.99</h2>
        <h2>Exclusive collection
             for everyone</h2>
             <Link to={'#'}
                    className='bg-black flex lg:gap-3 gap-2 rounded-full items-center text-white text-[14px] lg:text-[16px] font-medium font-praymary py-[12px] lg:py-[20px] lg:pl-[36px] pl-[24px] w-fit   lg:pr-[50px] pr-[19px] hover:scale-[1.1] duration-[.4s] '>
                Explore now
                <CiSearch className='lg:text-3xl text-2xl  ' />
                </Link>
    </div>

</section>







 </>
  )
}

export default Banner