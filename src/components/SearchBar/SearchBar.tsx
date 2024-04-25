import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  searchTerm: string;
  handleSearchByName: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ handleSearchByName }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <label className="search-bar__label">Search: </label>
      <input type="text" onInput={handleSearchByName} />
    </div>
  );
};

export default SearchBar;
