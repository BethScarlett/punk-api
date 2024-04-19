import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>Error 404: Page Not Found</div>
      <Link to="/"> Return Home</Link>
    </>
  );
};

export default ErrorPage;

//TODO - Style the error page better
