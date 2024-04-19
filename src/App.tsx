import { Outlet } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <div>Punk API</div>
      <NavBar />
      <Outlet />
    </>
  );
};
export default App;
