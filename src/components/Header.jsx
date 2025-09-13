import logo from "../assets/images/logo.svg";
import UnitsMenu from "./UnitsMenu";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="flex flex-row items-center justify-between">
        {/* logo */}
        <img src={logo} alt="logo" className="max-sm:w-1/2" />

        {/* unit drop down */}
        <UnitsMenu />
      </div>
    </header>
  );
};

export default Header;
