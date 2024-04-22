import "./CardContent.scss";
import Card from "../../components/Card/Card";
import { Beer } from "../../types/types";

type Beers = {
  beers: Beer[];
  searchTerm: string;
  filterElement: string;
};

const CardContent = ({ beers, searchTerm, filterElement }: Beers) => {
  let filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  switch (filterElement) {
    case "ABV": {
      filteredBeers = filteredBeers.filter((beer) => beer.abv > 6);
      break;
    }
    case "Classic": {
      filteredBeers = filteredBeers.filter(
        (beer) => Number(beer.first_brewed.split("/")[1]) < 2010
      );
      break;
    }
    case "Acidic": {
      filteredBeers = filteredBeers.filter((beer) => beer.ph > 4);
      break;
    }
    default: {
    }
  }

  return (
    <div className="beer-list">
      {filteredBeers.map((beer) => (
        <div key={beer.id} className="beer-list__card">
          <Card
            img={beer.image_url}
            name={beer.name}
            description={beer.description}
            id={beer.id}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContent;
