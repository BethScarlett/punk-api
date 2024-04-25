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
  const [acidic, setAcidic] = useState<boolean>(false);
  const [apiBeers, setAPIBeers] = useState<Beer[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const getBeers = async (
    pageNumber: number,
    filterElement: string,
    acidic: boolean,
    searchTerm: string
  ) => {
    const url = `http://localhost:3333/v2/beers?page=${pageNumber}${filterElement}${searchTerm}`;
    const res = await fetch(url);
    let data: Beer[] = await res.json();
    console.log(data);
    if (acidic) {
      data = data.filter((beer) => beer.ph < 4);
    }
    setAPIBeers(data);
  };

  useEffect(() => {
    getBeers(pageNumber, filterElement, acidic, searchTerm);
  }, [pageNumber, filterElement, acidic, searchTerm]);

  const handleIncrement = () => {
    if (pageNumber < 13 && (apiBeers.length == 25 || acidic))
      setPageNumber(pageNumber + 1);
  };
  //BUG - If you search by name and acidic, you can still go onto blank pages
  const handleDecrement = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleSearchByName = (event: FormEvent<HTMLInputElement>) => {
    const cleanSearch = event.currentTarget.value.toLowerCase();
    if (cleanSearch != "") {
      setSearchTerm(`&beer_name=${cleanSearch}`);
    } else {
      setSearchTerm("");
    }
  };

  const handleSearchByFilter = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      switch (event.currentTarget.id) {
        case "ABV":
          setFilterElement("&abv_gt=6");
          setAcidic(false);
          break;
        case "Classic":
          setFilterElement("&brewed_before=01-2010");
          setAcidic(false);
          break;
        case "Acidic":
          setFilterElement("");
          setAcidic(true);
          break;
        default:
          setFilterElement("");
      }
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
