import { Link, Outlet } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <>
      <div>This is where the NavBar will be</div>
      <Link to="/cardlist"> Render Cards </Link>
      <Outlet />
    </>
  );
};
export default App;
