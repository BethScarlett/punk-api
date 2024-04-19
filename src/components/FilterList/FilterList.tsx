import "./FilterList.scss";
const FilterList = () => {
  return (
    <div className="filter-list">
      <div className="filter-list__category">
        <label>High ABV(&gt; 6%)</label>
        <input type="checkbox" />
      </div>
      <div className="filter-list__category">
        <label>Classix Range</label>
        <input type="checkbox" />
      </div>
      <div className="filter-list__category">
        <label>Acidic(&lt; 4)</label>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default FilterList;
