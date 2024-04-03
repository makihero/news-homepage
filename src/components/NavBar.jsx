import burguer from '../assets/images/icon-menu.svg'
import iconClose from '../assets/images/icon-menu-close.svg'
import { useState } from 'react'

export const NavBar = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <ul className="hidden sm:flex sm:gap-8 sm:text-[16px] text-[18px] font-semibold text-dark-grayish-blue">
                <li className='hover:text-soft-red'><a href="#">Home</a></li>
                <li className='hover:text-soft-red'><a href="#">New</a></li>
                <li className='hover:text-soft-red'><a href="#">Popular</a></li>
                <li className='hover:text-soft-red'><a href="#">Trending</a></li>
                <li className='hover:text-soft-red'><a href="#">Categories</a></li>
            </ul>


                <ul className={`absolute right-0 top-0 bg-off-white p-6 w-[60%] h-[100vh] sm:hidden flex-col gap-4 text-dark-grayish-blue font-bold ${open ? 'flex' : 'hidden'}`}>

                <div className='cursor-pointer flex justify-end' onClick={handleClick}>
                    <img src={iconClose} alt="" />
                </div>
                <li><a className='hover:text-soft-red' href="#">Home</a></li>
                <li><a className='hover:text-soft-red' href="#">New</a></li>
                <li><a className='hover:text-soft-red' href="#">Popular</a></li>
                <li><a className='hover:text-soft-red' href="#">Trending</a></li>
                <li><a className='hover:text-soft-red' href="#">Categories</a></li>
                </ul>


            <img className="sm:hidden w-10 h-4 cursor-pointer" onClick={handleClick} src={burguer} alt="burguer"/>
        </>
    )
}