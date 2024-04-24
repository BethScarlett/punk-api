import { FormEventHandler } from "react";
import FilterList from "../FilterList/FilterList";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";
import construction from "/under-construction.svg";

type NavbarProps = {
  searchTerm: string;
  handleSearchByName: FormEventHandler<HTMLInputElement>;
  handleSearchByFilter: FormEventHandler<HTMLInputElement>;
};

const NavBar = ({
  searchTerm,
  handleSearchByName,
  handleSearchByFilter,
}: NavbarProps) => {
  return (
    <div className="navbar">
      <SearchBar
        searchTerm={searchTerm}
        handleSearchByName={handleSearchByName}
      />
      <FilterList handleSearchByFilter={handleSearchByFilter} />
      <div className="navbar__construction">
        <img
          src={construction}
          alt="Under construction sign"
          className="navbar__construction"
        />
      </div>
    </div>
  );
};

export default NavBar;
