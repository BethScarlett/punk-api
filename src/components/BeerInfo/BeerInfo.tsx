import { Link, useParams } from "react-router-dom";
import { Beer } from "../../types/types";
import "./BeerInfo.scss";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
  //Grab beer id from url
  const { beerID } = useParams();

  //Filter beers array to find id match
  const filteredBeer = beers.find((beer) => beer.id === Number(beerID));

  //Handle if no match was found
  if (!filteredBeer)
    return (
      <div className="beer-error">
        <p className="beer-error__label">
          Sorry. We couldn't find any beers with that id.
        </p>
        <Link to="/">
          <button className="beer-error__home">Home</button>
        </Link>
      </div>
    );

  //Create string for ingredients
  let ingredients: string = "Malt (";

  //Loop through each ingredient array, and add values to string
  const malts = filteredBeer.ingredients.malt.forEach((malt) => {
    ingredients += `${malt.name} (${malt.amount.value} ${malt.amount.unit}) `;
  });
  console.log(malts);

  ingredients += "), Hops (";
  const hops = filteredBeer.ingredients.hops.forEach((hop) => {
    ingredients += `${hop.name} (${hop.amount.value} ${hop.amount.unit}) `;
  });
  console.log(hops);

  ingredients += `), Yeast (${filteredBeer.ingredients.yeast})`;

  return (
    <div className="beer-info" id="information">
      {/* Show image of filtered beer */}
      <img
        src={filteredBeer.image_url}
        alt={filteredBeer.name}
        className="beer-info__image"
      />
      {/* Display information about filtered */}
      <div className="beer-info__details">
        <h1>{filteredBeer.name}</h1>
        <p>"{filteredBeer.tagline}"</p>
        <p className="beer-info__details beer-info__details--description">{`Description: ${filteredBeer.description}`}</p>
        <p className="beer-info__details beer-info__details--label">
          Ingredients:{" "}
        </p>
        <p className="beer-info__details beer-info__details--ingredients">{`${ingredients}`}</p>
        <p className="beer-info__details beer-info__details--label">
          Food Pairings:
        </p>
        <p className="beer-info__details beer-info__details--pairings">{`This beer pairs well with: ${filteredBeer.food_pairing.join(
          ", "
        )}`}</p>
        <p className="beer-info__details beer-info__details--label">
          Brewers Tips:
        </p>
        <p className="beer-info__details beer-info__details--tips">{`Trying to make this for yourself? Here's some tips: ${filteredBeer.brewers_tips}`}</p>
        <Link to="/">
          <button className="beer-info__details beer-info__details--home">
            ⬅ Back to Beers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BeerInfo;
