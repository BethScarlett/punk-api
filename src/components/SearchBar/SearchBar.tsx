import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  searchTerm: string;
  handleSearchByName: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ searchTerm, handleSearchByName }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <label>Search: </label>
      <input type="text" value={searchTerm} onInput={handleSearchByName} />
    </div>
  );
};

export default SearchBar;
