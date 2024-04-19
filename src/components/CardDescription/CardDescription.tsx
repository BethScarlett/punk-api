import "./CardDescription.scss";

type CardDescriptionProps = {
  description: string;
  handleShowFullDesc: () => void;
};

const CardDescription = ({
  description,
  handleShowFullDesc,
}: CardDescriptionProps) => {
  return (
    <div className="card-description">
      <p className="card-description__desc">{description}</p>
      <button onClick={handleShowFullDesc} className="card-description__button">
        Go Back
      </button>
    </div>
  );
};

export default CardDescription;

//Create a box covering the card
//Within the box the full description should be shown
//As well as this there should be a button to close the component (change the state in parent component)
