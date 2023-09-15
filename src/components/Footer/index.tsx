import nameplate from "../../images/footer_nameplate.png";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="relative flex flex-shrink justify-center">
        <img
          src={nameplate}
          className="absolute w-[12%] bottom-[50%] left-[50%] transfrom -translate-x-[50%]"
          alt="Made by Donovan Courtney"
        />
      </div>
    </footer>
  );
};

export default Footer;
