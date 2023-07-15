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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* <Link to='/' className='flex items-center gap-2 ' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white font-bold cursor-pointer text-[18px] '>Taheer <span className='sm:block hidden'>| Ahmed</span></p>
        </Link> */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain fill-white rounded-xl' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Taheer Ahmed &nbsp;
            <span className='sm:block hidden'> | App Specialist</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 mx-1 '>{
          navLinks.map((link, index = 0) => (<li
            key={link.id}
            className={`${active === link ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`} key={index += 1}>{link.title}</a>
          </li>))
        }</ul>



        <div className={`${!toggle ? ' left-[-100%] ' : 'flex-left left-0 transition-all duration-150'} bg-[#5a5a5a5a] w-full fixed top-0   h-full text-white navbar-transition`}>
          <div className={`${!toggle ? 'left-[-50%]' : 'left-[0%]'} bg-black fixed top-0 bottom-0 w-[50%] text white sidebar`}>
            <ul className='list-none  sm:flex flex-row gap-10 '>{
              navLinks.map((link, index = 0) => (<li
                key={link.id}
                className={`${active === link ? "text-white" : "text-secondary"} hover:text-white text-[28px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }
                }
              >
                <a href={`#${link.id}`} key={index += 1}>{link.title}</a>
              </li>))
            }</ul>
          </div>
          <div className={`${!toggle ? "close" : "hidden"}sm:hidden flex flex-1 justify-end items-center`}>
            <img src={close} alt="menu" className=' w-[28px] h-[28px]  object-contain cursor-pointer z-100 mt-5' onClick={() => { setToggle(!toggle) }} />

          </div>
        </div>
        <div className={`sm:hidden flex flex-1 justify-end items-center`}>
          <img src={menu} alt="menu" className={`${toggle === true ? "hidden navbar-transition" : " flex w-[28px] h-[28px]  object-contain cursor-pointer z-100"}`} onClick={() => { setToggle(!toggle) }} />

        </div>

      </div>
    </nav>
  )
}

export default Navbar