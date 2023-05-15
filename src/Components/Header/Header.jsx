import MyMovies from "./MyMovies";
import NavLinks from "./NavLinks";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>MovieDB</h1>
      <aside>
        <NavLinks />
        <MyMovies />
      </aside>
    </header>
  );
};

export default Header;
