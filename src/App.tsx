import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import CardContent from "./containers/CardContent/CardContent";
import beers from "./data/beer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Punk API</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<CardContent beers={beers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
