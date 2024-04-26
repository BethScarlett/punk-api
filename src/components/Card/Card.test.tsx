import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";

it("should correctly render the name", () => {
  render(
    <BrowserRouter>
      <Card
        img={beers[0].image_url}
        name={beers[0].name}
        description={beers[0].description}
        id={beers[0].id}
      />
    </BrowserRouter>
  );

  const name = screen.getByText("Buzz");

  expect(name).toBeInTheDocument();
});

it("should correctly render an image", () => {
  render(
    <BrowserRouter>
      <Card
        img={beers[0].image_url}
        name={beers[0].name}
        description={beers[0].description}
        id={beers[0].id}
      />
    </BrowserRouter>
  );

  const image = screen.getByAltText("beer");

  expect(image).toBeInTheDocument();
});
