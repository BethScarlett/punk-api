import "./CardContent.scss";
import Card from "../../components/Card/Card";
import { Beer } from "../../types/types";

type BeersProps = {
  beers: Beer[];
};

const CardContent = ({ beers }: BeersProps) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
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
