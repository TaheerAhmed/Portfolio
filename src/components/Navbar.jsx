import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import '../CSS/navbar.css'
const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={` center py-5 px-1 fixed top-0 z-20 bg-primary w-full flex`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2 ' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white font-bold cursor-pointer text-[18px] '>Taheer <span className='sm:block hidden'>| Ahmed</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 '>{
navLinks.map((link,index=0)=>(<li 
key={link.id}
className={`${active===link?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
onClick={()=>setActive(link.title)}
>
<a href={`#${link.id}`} key={index+=1}>{link.title}</a>
</li>))
}</ul>
        <div className='sm:hidden flex flex-1 justify-end items-center '>

          <div className={`${!toggle ? 'hidden left-[-100%] ' : 'flex-left left-0 transition-all duration-150'} bg-[#5a5a5a5a] w-full fixed top-0   h-full text-white navbar-transition`}>
            <div className={`${!toggle ? 'left-[-50%]' : 'left-[0%]'} bg-black fixed top-0 bottom-0 w-[50%] text white sidebar`}>
    
  </div>
</div>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer fixed top-0' onClick={() => { setToggle(!toggle) }} />
</div>
      </div>
    </nav>
  )
}

export default Navbar