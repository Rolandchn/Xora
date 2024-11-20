import { useEffect, useState } from 'react';
import {Link as LinkScroll} from 'react-scroll';
import clsx from 'clsx';


const Header = () => {
    // functionnality: state
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY >= 32);
        }

        window.addEventListener('scroll' , handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    window.onresize = () => {
        window.outerWidth > 1024 && (setIsOpen(false), document.body.style.overflowY = 'auto');
    }

    const NavLink = ({title}) => (
        <LinkScroll className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5' onClick={() => {setIsOpen(false); document.body.style.overflowY = 'auto';
        }} to={title} offset={-100} spy smooth activeClass='nav-active'>
            {title}
        </LinkScroll>
    )
 
    return (
    <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
        <div className="container flex h-14 items-center justify-between max-lg:px-5">
            <a className="lg:hidden cursor-pointer z-2" href="#">
                <img src="/images/xora.svg" alt="logo" height={55} width={115}/>
            </a>

            <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100 block' : 'max-lg:hidden')}>
               
                <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md-px-4">

                    <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                        <ul className="flex max-lg:block max-lg:px12">
                            <li className="nav-li">
                                <NavLink title="features"/>
                                
                                <div className='dot'></div>

                                <NavLink title="pricing"/>
                            </li>

                            <li className='nav-logo'>
                                <LinkScroll className='max-lg:hidden transition-transform duration-500 cursor-pointer' onClick={() => {setIsOpen(false); document.body.style.overflowY = 'auto';}} to="hero" offset={-250} spy smooth >
                                    <img src="/images/xora.svg" alt="logo" width={160} height={55}/>
                                </LinkScroll>
                            </li>

                            <li className='nav-li'>
                                <NavLink title="faq"/>
                                
                                <div className='dot'></div>

                                <NavLink title="download"/>
                            </li>
                        </ul>
                    </nav>

                    <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
                        <img 
                        className='relative z-2' 
                        src="/images/bg-outlines.svg" 
                        alt="" 
                        width={960} height={380}/>

                        <img 
                        className='absolute inset-0 min-blend-soft-light opacity-5' 
                        src="/images/bg-outlines-fill.png" 
                        alt="" 
                        width={960} height={380}/>
                    </div>

                </div>
            </div>

            <button id='' className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center' onClick={() => {
              if(isOpen){
                setIsOpen(false);

                document.body.style.overflowY = 'auto';
              }
              else{
                setIsOpen(true);

                document.body.style.overflowY = 'hidden';
              }
            }}>
                <img className='size-1/2 object-contain' src={`/images/${isOpen ? "close" : "magic"}.svg`} alt="magic" />
            </button>
        </div>
    </header>
  )
}

export default Header; 