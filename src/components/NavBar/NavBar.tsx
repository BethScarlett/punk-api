import FilterList from "../FilterList/FilterList";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <SearchBar />
      <FilterList />
    </div>
  );
};

export default NavBar;
