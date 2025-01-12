import { headerMenuItems } from '../../../static/constants';

const HeaderMobileMenu = () => {
  return (
    <ul
      className={`absolute left-0 right-[200%] top-[84px] hidden h-screen flex-col overflow-hidden bg-black py-20 text-center text-3xl text-white group-[.menu-opened]:right-0 lg:flex transition-[right] duration-300`}
    >
      {headerMenuItems.map((item) => (
        <li className={`w-full`} key={item.id}>
          <a className={`block py-5`} href={item.href}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMobileMenu;
