import "./PageButtons.scss";
import up from "/up-arrow.png";
import down from "/down-arrow.png";

type PageButtonsProps = {
  page: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

const PageButtons = ({
  page,
  handleDecrement,
  handleIncrement,
}: PageButtonsProps) => {
  return (
    <div className="page-buttons">
      <img
        src={up}
        alt="up"
        onClick={handleIncrement}
        className="page-buttons__arrow page-buttons__arrow--up"
      />
      <label className="page-buttons__number">Page: {page}</label>
      <img
        src={down}
        alt="down"
        onClick={handleDecrement}
        className="page-buttons__arrow page-buttons__arrow--down"
      />
    </div>
  );
};

export default PageButtons;
