import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import CardContent from "./containers/CardContent/CardContent";
import beers from "./data/beer";
import { FormEvent, useEffect, useState } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import { Beer } from "./types/types";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterElement, setFilterElement] = useState<string>("");
  const [other, setOther] = useState<Beer[]>(beers);

  const getBeers = async () => {
    const url = `http://localhost:3333/v2/beers?per_page=80`;
    const res = await fetch(url);
    const data: Beer[] = await res.json();
    setOther(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  console.log(other);

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
                beers={other}
                searchTerm={searchTerm}
                filterElement={filterElement}
              />
            }
          />
          <Route path="/:beerID" element={<BeerInfo beers={other} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
