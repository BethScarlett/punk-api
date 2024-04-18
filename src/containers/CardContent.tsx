import Card from "../components/Card";
import beers from "../data/beer";

const CardContent = () => {
  return (
    <div>
      {beers.map((beer) => (
        <Card />
      ))}
    </div>
  );
};

export default CardContent;

//[ ] - Get data from Navbar cotainer into here, then filter based off of import
//      It should allow for multiple concurrent filters
