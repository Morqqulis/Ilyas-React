import { headerMenuItems } from '../../../static/constants'

const HeaderMobileMenu = () => {
  return (
    <ul
      className={`absolute left-[200%] top-[84px] hidden h-screen w-full flex-col overflow-hidden bg-black py-20 text-center text-3xl text-white transition-all duration-300 group-[.menu-opened]:left-0 lg:flex`}
    >
      {headerMenuItems.map((item) => (
        <li className={`w-full`} key={item.id}>
          <a className={`block py-5`} href={item.href}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default HeaderMobileMenu
