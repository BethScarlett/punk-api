import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { Beer } from "./types/types";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import NavBar from "./components/NavBar/NavBar";
import CardContent from "./containers/CardContent/CardContent";
import PageButtons from "./components/PageButtons/PageButtons";
import NoBeers from "./components/NoBeers/NoBeers";

const App = () => {
  //Create state variables
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterElement, setFilterElement] = useState<string>("");
  const [acidic, setAcidic] = useState<boolean>(false);
  const [apiBeers, setAPIBeers] = useState<Beer[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [noBeers, setNoBeers] = useState<boolean>(false);

  //Grab beers from the api
  const getBeers = async (
    pageNumber: number,
    filterElement: string,
    acidic: boolean,
    searchTerm: string
  ) => {
    const url = `http://localhost:3333/v2/beers?page=${pageNumber}${filterElement}${searchTerm}`;
    const res = await fetch(url);
    let data: Beer[] = await res.json();

    //Manually filter results for acidic filter
    if (acidic) {
      data = data.filter((beer) => beer.ph < 4);
    }

    //Check if no beers have been retrieved from the api
    if (data.length == 0) setNoBeers(true);
    else if (data.length > 0) setNoBeers(false);

    setAPIBeers(data);
  };

  //Watch state variables and pass in variables to adjust api url
  useEffect(() => {
    getBeers(pageNumber, filterElement, acidic, searchTerm);
  }, [pageNumber, filterElement, acidic, searchTerm]);

  //Increase page number to show next set of beers if conditions are valid
  const handleIncrement = () => {
    if (pageNumber < 13 && (apiBeers.length == 25 || acidic))
      setPageNumber(pageNumber + 1);
  };

  //Decrease page number to show previous set of beers if conditions are valid
  const handleDecrement = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  //Grab search term from input on screen and set state accordingly
  const handleSearchByName = (event: FormEvent<HTMLInputElement>) => {
    const cleanSearch = event.currentTarget.value.toLowerCase();
    if (cleanSearch != "") {
      setSearchTerm(`&beer_name=${cleanSearch}`);
    } else {
      setSearchTerm("");
    }
  };

  //Grab selected filter element and set state accordingly
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
          {/* Display Navbar on every page */}
          <NavBar
            searchTerm={searchTerm}
            handleSearchByName={handleSearchByName}
            handleSearchByFilter={handleSearchByFilter}
          />
        </div>
        <Routes>
          <Route
            // Display cards on the base url
            path="/"
            element={
              <>
                {/* Only show cards if there are cards to show */}
                <div>
                  {noBeers ? <NoBeers /> : <CardContent beers={apiBeers} />}
                </div>
                <PageButtons
                  page={pageNumber}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                />
              </>
            }
          />
          {/* Route to each beer's individual page */}
          <Route path="/:beerID" element={<BeerInfo beers={apiBeers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
