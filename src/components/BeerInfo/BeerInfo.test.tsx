import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BeerInfo from "./BeerInfo";

it("should render the beer name correctly", () => {
  const id = beers[0].id;

  render(
    <MemoryRouter initialEntries={[`/${id}`]}>
      <Routes>
        <Route path="/:beerID" element={<BeerInfo beers={beers} />} />
      </Routes>
    </MemoryRouter>
  );

  const name = screen.getByText("Buzz");

  expect(name).toBeInTheDocument();
});

it("should render the beer description correctly", () => {
  const id = beers[0].id;

  render(
    <MemoryRouter initialEntries={[`/${id}`]}>
      <Routes>
        <Route path="/:beerID" element={<BeerInfo beers={beers} />} />
      </Routes>
    </MemoryRouter>
  );

  const description = screen.getByText(
    "Description: A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
  );

  expect(description).toBeInTheDocument();
});

it("should render the beer ingredients correctly", () => {
  const id = beers[0].id;

  render(
    <MemoryRouter initialEntries={[`/${id}`]}>
      <Routes>
        <Route path="/:beerID" element={<BeerInfo beers={beers} />} />
      </Routes>
    </MemoryRouter>
  );

  const ingredients = screen.getByText(
    "Malt (Maris Otter Extra Pale (3.3 kilograms) Caramalt (0.2 kilograms) Munich (0.4 kilograms) ), Hops (Fuggles (25 grams) First Gold (25 grams) Fuggles (37.5 grams) First Gold (37.5 grams) Cascade (37.5 grams) ), Yeast (Wyeast 1056 - American Ale™)"
  );

  expect(ingredients).toBeInTheDocument();
});
