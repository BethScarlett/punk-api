import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import CardContent from "./containers/CardContent/CardContent";
import beers from "./data/beer";
import { FormEvent, useState } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterElement, setFilterElement] = useState<string>("");

  const handleSearchByName = (event: FormEvent<HTMLInputElement>) => {
    const cleanSearch = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanSearch);
  };

  const handleSearchByFilter = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setFilterElement(event.currentTarget.id);
    } else {
      setFilterElement("");
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="app__heading">🍺Punk API🍺</h1>
        <div className="app__navbar">
          <NavBar
            searchTerm={searchTerm}
            handleSearchByName={handleSearchByName}
            handleSearchByFilter={handleSearchByFilter}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <CardContent
                beers={beers}
                searchTerm={searchTerm}
                filterElement={filterElement}
              />
            }
          />
          <Route path="/:beerID" element={<BeerInfo beers={beers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
