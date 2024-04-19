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

  //TODO - Think of better name than smallDesc and fullDesc

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
  return (
    <div className="card">
      <img src={img} alt="" className="card__image" />
      <h1 className="card__heading">{name}</h1>
      <div className={cardClassName}>{showFullDesc ? fullDesc : smallDesc}</div>
    </div>
  );
};

export default Card;

//TODO - Look at dealing with shortening the description in the card content container instead
