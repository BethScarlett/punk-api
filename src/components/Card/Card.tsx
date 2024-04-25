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

  const smallDesc = (
    <div>
      <div>{shortDesc}</div>
      <button onClick={handleShowFullDesc} className="card__button">
        [Expand]
      </button>
    </div>
  );

  const fullDesc = (
    <>
      <h2 className="card__heading">Description: </h2>
      <p>{description}</p>
      <button onClick={handleShowFullDesc} className="card__button">
        [Go back]
      </button>
    </>
  );

  let cardClassName = "card__description";
  if (showFullDesc) cardClassName += " card__description--back";

  let beerImg: string = "";
  if (img == null) {
    beerImg = "https://images.punkapi.com/v2/24.png";
  } else beerImg = img;

  return (
    <div className="card">
      <img src={beerImg} alt="" className="card__image" />
      <Link to={`/${id}`}>
        <h1 className="card__heading">{name}</h1>
      </Link>

      <div className={cardClassName}>{showFullDesc ? fullDesc : smallDesc}</div>
    </div>
  );
};

export default Card;
