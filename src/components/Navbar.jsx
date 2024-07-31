import React, { useState } from 'react'
import Arrow from '../images/icons/arrow.svg'
import Ham from '../images/icons/hamburger.svg'
import close from '../images/icons/close.svg'


function Navbar() {
    const [dropdown, setDropDown] = useState(false)
    const [dropdown1, setDropDown1] = useState(false)
    const [menu, setMenu] = useState(false)

  return (
    <section className='bg-purple-100 z-50'>
        <div className='flex items-center justify-between md:px-5 px-2 py-3 sm:py-0 '>
            <div className='flex items-center justify-between md:gap-14'>
            <div className='flex items-center'>
                <img  src={require('../images/icons/Frame.png')} alt="" />
                <h2 className='font-semibold'>Estatery</h2>
            </div>

            
            <div className=''>
                <ul className='sm:flex sm:flex-row sm:items-center sm:justify-around sm:gap-5 md:gap-14 text-sm hidden '>
                    <li className='cursor-pointer'>Rent</li>
                    <li className='cursor-pointer'>Buy</li>
                    <li className='cursor-pointer'>Sell</li>
                    
                    <li className='flex items-center relative sm:py-5 cursor-pointer whitespace-nowrap'
                    onMouseEnter={()=> setDropDown(true)}
                    onMouseLeave={()=> setDropDown(false)}
                    >Manage Property 
                        <span><img className={`${dropdown ? "rotate-180 " : ""} transition-all duration-300 ease-linear w-6`} src={Arrow} alt="" /></span>

                    {dropdown && 
                    <div className='bg-black h-20 z-50 absolute w-full sm:w-40 top-[64px]'>
                        <h1 className='text-white'>1</h1>
                    </div>
                    }
                    </li>

                    <li className='flex items-center relative sm:py-5 cursor-pointer'
                    onMouseEnter={()=> setDropDown1(true)}
                    onMouseLeave={()=> setDropDown1(false)}
                    >Resources 
                        <span><img className={`${dropdown1 ? "rotate-180 " : ""} transition-all duration-300 ease-linear w-6`} src={Arrow} alt="" /></span>

                        {dropdown1 && 
                    <div className='bg-black h-20 z-50 absolute w-full sm:w-40 top-[64px]'>
                        <h1 className='text-white'>2</h1>
                    </div>
                    } 

                    </li>
                </ul>



                { menu &&
                <ul className={`sm:hidden fixed z-50 bg-transparent sm:justify-center sm:static right-0 top-[56px] w-full flex-col  flex px- py- sm:py-0 sm:gap-y-0  min-h-[100vh] sm:px-5 bg-white transition-all duration-700 ease-in-out transform text-base *:border-b-[1px]
                    ${
                        menu
                          ? "translate-x-0 opacity-100"
                          : "translate-x-full opacity-0 sm:translate-x-0 sm:opacity-100"
                      }
                `}>
                    <li className='cursor-pointer bg-purple-200 hover:bg-purple-400 pl-3 py-5'>Rent</li>
                    <li className='cursor-pointer bg-purple-200 hover:bg-purple-400 pl-3 py-5'>Buy</li>
                    <li className='cursor-pointer bg-purple-200 hover:bg-purple-400 pl-3 py-5'>Sell</li>
                    
                    <li className='cursor-pointer whitespace-nowrap bg-purple-200 pl-3 py-5'
                    >Manage Property 
                    </li>

                    <li className='cursor-pointer bg-purple-200 hover:bg-purple-400 pl-3  py-5'

                    >Resources 
                    </li>
                </ul>}
            </div>
            </div>

            <div className='sm:hidden'
            onClick={()=> setMenu(!menu)}
            >
            {menu ? 
            <div className=''>
                <img className='' src={close} alt="" />
            </div> : <div className='sm:hidden'>
                <img className='' src={Ham} alt="" />
            </div>}
            

            </div>

            <div className='hidden sm:flex'>
                <div className='space-x-3'>
                    <button className='border border-gray-300 rounded-md px-3 py-2 text-sm'>Login</button>
                    <button className='bg-purple-600 text-white px-3 py-2 rounded-md text-sm'>Sign up</button>
                </div>
            </div>
        </div>


    </section>

    
  )
}

export default Navbar