import { useEffect, useState } from 'react'
import Logo from '../../../assets/logo.svg'
import HeaderBurger from './HeaderBurger'
import HeaderMenu from './HeaderMenu'
import HeaderMobileMenu from './HeaderMobileMenu'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const scrollHandler = () => setIsScrolled(window.scrollY > 100)

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'top-0 bg-dark-gray' : 'top-[70px]'}`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <a href={'/'}>
            <img src={Logo} alt="logo" width={161} height={53} />
          </a>
          <HeaderMenu />
          <HeaderMobileMenu />
          <HeaderBurger />
        </nav>
      </div>
    </header>
  )
}

export default Header
