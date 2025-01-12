import { useEffect, useState } from 'react'
import Logo from '../../../assets/logo.svg'
import HeaderBurger from './HeaderBurger'
import HeaderMenu from './HeaderMenu'
import HeaderMobileMenu from './HeaderMobileMenu'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    setScrolled(offset > 100)
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'top-0 bg-dark-gray' : 'top-[70px]'}`}
    >
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <img src={Logo} alt="logo" width={161} height={53} />
          <HeaderMenu />
          <HeaderMobileMenu />
          <HeaderBurger />
        </nav>
      </div>
    </header>
  )
}

export default Header
