import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import CardContent from "./containers/CardContent/CardContent";
import { FormEvent, useEffect, useState } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import { Beer } from "./types/types";
import PageButtons from "./components/PageButtons/PageButtons";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterElement, setFilterElement] = useState<string>("");
  const [apiBeers, setAPIBeers] = useState<Beer[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const getBeers = async (pageNumber: number) => {
    const url = `http://localhost:3333/v2/beers?page=${pageNumber}`;
    const res = await fetch(url);
    const data: Beer[] = await res.json();
    setAPIBeers(data);
  };

  useEffect(() => {
    getBeers(pageNumber);
  }, [pageNumber]);

  const handleIncrement = () => {
    if (pageNumber < 13) setPageNumber(pageNumber + 1);
  };

  const handleDecrement = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  console.log(apiBeers);

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

  //TODO - use params to filter data which from filter list elements

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
              <>
                <CardContent
                  beers={apiBeers}
                  searchTerm={searchTerm}
                  filterElement={filterElement}
                />
                <PageButtons
                  page={pageNumber}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                />
              </>
            }
          />
          <Route path="/:beerID" element={<BeerInfo beers={apiBeers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
