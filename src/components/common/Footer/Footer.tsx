import logo from '../../../assets/footer-logo.svg'

const Footer = () => {
  return (
    <footer className={`flex items-center justify-center bg-[#343740] py-[50px]`}>
      <img src={logo} alt="Footer logotype" width={159} height={52} />
    </footer>
  );
};

export default Footer;
