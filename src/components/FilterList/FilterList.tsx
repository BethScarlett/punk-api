import { FormEventHandler } from "react";
import "./FilterList.scss";

type FilterListProps = {
  handleSearchByFilter: FormEventHandler<HTMLInputElement>;
};

const FilterList = ({ handleSearchByFilter }: FilterListProps) => {
  return (
    <div className="filter-list">
      <div className="filter-list__category">
        <label>All</label>
        <input
          type="radio"
          name="options"
          onChange={handleSearchByFilter}
          id="All"
        />
      </div>
      <div className="filter-list__category">
        <label>High ABV(&gt; 6%)</label>
        <input
          type="radio"
          name="options"
          onChange={handleSearchByFilter}
          id="ABV"
        />
      </div>
      <div className="filter-list__category">
        <label>Classic Range</label>
        <input
          type="radio"
          name="options"
          onChange={handleSearchByFilter}
          id="Classic"
        />
      </div>
      <div className="filter-list__category">
        <label>Acidic(&lt; 4)</label>
        <input
          type="radio"
          name="options"
          onChange={handleSearchByFilter}
          id="Acidic"
        />
      </div>
    </div>
  );
};

export default FilterList;
