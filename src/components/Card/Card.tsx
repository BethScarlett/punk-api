import CardDescription from "../CardDescription/CardDescription";
import "./Card.scss";
import { useState } from "react";

type CardProps = {
  img: string;
  name: string;
  description: string;
};

const Card = ({ img, name, description }: CardProps) => {
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

  return (
    <div className="card">
      <img src={img} alt="" className="card__image" />
      <h1 className="card__heading">{name}</h1>
      <p className="card__description">
        {shortDesc}
        {/* Show Full Description when expand button is pressed */}
        {showFullDesc && (
          <CardDescription
            description={description}
            handleShowFullDesc={handleShowFullDesc}
          />
        )}
        <button onClick={handleShowFullDesc} className="card__button">
          [expand]
        </button>
      </p>
    </div>
  );
};

export default Card;

//TODO - Look at dealing with shortening the description in the card content container instead

//Left to do - enable button to bring up a container with the whole description (similar to menus in ear worm)
//           - enable this pop-up to be closed
