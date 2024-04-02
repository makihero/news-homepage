import burguer from '../assets/images/icon-menu.svg'

export const NavBar = () => {
    return (
        <>
            <ul className="hidden sm:flex sm:gap-8 sm:text-[16px] text-[18px] font-semibold text-dark-grayish-blue">
                <li className='hover:text-soft-red'><a href="#">Home</a></li>
                <li className='hover:text-soft-red'><a href="#">New</a></li>
                <li className='hover:text-soft-red'><a href="#">Popular</a></li>
                <li className='hover:text-soft-red'><a href="#">Trending</a></li>
                <li className='hover:text-soft-red'><a href="#">Categories</a></li>
            </ul>

            <img className="sm:hidden w-10 h-4 cursor-pointer" src={burguer} alt="burguer"/>
        </>
    )
}