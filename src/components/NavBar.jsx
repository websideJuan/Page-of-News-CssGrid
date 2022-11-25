import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import btnMenu from '../assets/images/icon-menu.svg'
import btnMenuClose from '../assets/images/icon-menu-close.svg'

export const NavBar = () => {
    const [menu, setMenu] = useState(false)


    const showMenu = () =>  setMenu(true)
    

    const setShowMenu = () =>  setMenu(false)
    

    return (
        <nav className={`flex items-center justify-between  container mx-auto lg:py-20 lg:pb-12 max-w-5xl overflow-hidden py-5 px-4 ${menu && 'before:fixed before:inset-0 before:bg-[#0000008c] before:-z10'} lg:px-0 lg:before:relative`}>
            <a href="/" className='mr-auto'>
                <img src={Logo} alt="..." />
            </a>

            <ul className={`fixed flex flex-col justify-center pb-24 gap-6 pl-4 right-0 top-0 bottom-0 left-1/3 translate-x-full opacity-0 bg-white lg:pb-0 lg:flex-row lg:static lg:justify-center lg:items-center lg:h-full lg:flex lg:gap-10 lg:translate-x-0 ${menu && 'opacity-100 translate-x-0 transition-opacity'} transition-transform lg:opacity-100`}>
                <button onClick={setShowMenu} className='absolute top-0 right-0 m-7 lg:hidden'><img src={btnMenuClose} alt="..." /></button>
                <li><a href='/' className='hover:text-orange'>Home</a></li>
                <li><a href='/' className='hover:text-orange'>New</a></li>
                <li><a href='/' className='hover:text-orange'>Popular</a></li>
                <li><a href='/' className='hover:text-orange'>Trending</a></li>
                <li><a href='/' className='hover:text-orange'>Categories</a></li>
            </ul>

            <button 
                className="lg:hidden"
                onClick={showMenu}
                >
                    <img src={btnMenu} alt="" />
            </button>
        </nav>
    )
}