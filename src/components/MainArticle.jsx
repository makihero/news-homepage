import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
    return (
        <section className='mb-8'>
            <picture>
                <source media="(max-width: 640px)" srcSet={imgMobile} />
                <source media="(min-width: 641px)" srcSet={imgDesktop} />
                <img src={imgMobile} alt="web3" />
            </picture>
            <div className="sm:flex sm:gap-8">
                <h1 className="font-bold text-4xl mt-4 mb-4 w-[80%] leading-none flex-1 sm:text-5xl">The Bright Future of Web 3.0?</h1>
                <div className='flex-1'>
                    <p className="mb-4 text-[13px] sm:text-[16px] sm:pt-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className='bg-soft-red text-off-white py-2 px-7 uppercase text-[12px] text-inter hover:bg-very-dark-blue '>Read more</button>
                </div>
            </div>
        </section>
    )
}