import "./Card.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  img: string;
  name: string;
  description: string;
  id: number;
};

const Card = ({ img, name, description, id }: CardProps) => {
  //Shorten description if it's too long
  let shortDesc: string = description;
  if (description.length > 150) {
    shortDesc = description.slice(0, 160) + "...";
  }

  //Use state to control showiing full description
  const [showFullDesc, setShowFullDesc] = useState<boolean>();

  //Function to toggle showing full description
  const handleShowFullDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  //Create small description function to display before expand is clicked
  const smallDesc = (
    <div>
      <div>{shortDesc}</div>
      <button onClick={handleShowFullDesc} className="card__button">
        [Expand]
      </button>
    </div>
  );

  //Create full description function to display after expand is clicked
  const fullDesc = (
    <>
      <h2 className="card__heading">Description: </h2>
      <p>{description}</p>
      <button onClick={handleShowFullDesc} className="card__button">
        [Go back]
      </button>
    </>
  );

  //Create variable for card class name
  let cardClassName = "card__description";

  //Append card class name variable if full description is showing
  if (showFullDesc) cardClassName += " card__description--back";

  //Check if image url is null and manually set it if so
  let beerImg: string = "";
  if (img == null) {
    beerImg = "https://images.punkapi.com/v2/24.png";
  } else beerImg = img;

  return (
    <div className="card">
      {/* Display beer image */}
      <img src={beerImg} alt="beer" className="card__image" />
      {/* Wrap heading in link to send user to indivdual beer info page */}
      <Link to={`/${id}`}>
        <h1 className="card__heading">{name}</h1>
      </Link>
      {/* Either show full description or short description, depending on showFullDesc state variable */}
      <div className={cardClassName}>{showFullDesc ? fullDesc : smallDesc}</div>
    </div>
  );
};

export default Card;
