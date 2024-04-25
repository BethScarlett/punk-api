import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render the title", () => {
  //Arrange
  render(<App />);

  //Act
  const title = screen.getByText("🍺Punk API🍺");

  //Assert
  expect(title).toBeInTheDocument();
});

it("should not show an error message on load", () => {
  render(<App />);

  const errorOne = screen.queryByText(
    "Sorry. We couldn't find any beers with that id."
  );
  const errorTwo = screen.queryByText(
    "No beers found. Sorry. Keep going to the next page, or try going back."
  );

  expect(errorOne).toBeFalsy();
  expect(errorTwo).toBeFalsy();
});
