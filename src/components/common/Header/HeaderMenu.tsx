import { headerMenuItems } from '../../../static/constants'

const HeaderMenu = () => {
  return (
    <ul className={`flex items-center gap-9 text-lg font-semibold text-white lg:hidden xl:gap-5`}>
      {headerMenuItems.map((item) => (
        <li key={item.id}>
          <a className={`transition-all hover:text-blue`} href={item.href}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default HeaderMenu
