import Card from "../../components/Card/Card";
import beers from "../../data/beer";

const CardContent = () => {
  return (
    <div>
      {beers.map((beer) => (
        <div key={beer.id}>
          <Card
            img={beer.image_url}
            name={beer.name}
            description={beer.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContent;

//[ ] - Get data from Navbar cotainer into here, then filter based off of import
//      It should allow for multiple concurrent filters
