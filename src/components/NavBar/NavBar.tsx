import { FormEventHandler } from "react";
import FilterList from "../FilterList/FilterList";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";

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
    </div>
  );
};

export default NavBar;
