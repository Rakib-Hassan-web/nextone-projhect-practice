import React from 'react'

import bannerbg from '../assets/image/bannerimg.png'

const Banner = () => {
  return (
 <>


<section id='banner'    style={{background: `url(${bannerbg})` ,backgroundRepeat: 'no-repeat' ,backgroundPosition:'center' ,backgroundSize:'cover'}} className='py-[148px] w-ful'>


    <div className="container">
        <h2>Starting from: $49.99</h2>
        
    </div>

</section>







 </>
  )
}

export default Banner