import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: mock API responses and test other functionalities

test("renders all hotels in list", async () => {
  render(<App />);
  const hotel1 = await screen.findByText("OBM Hotel 1");
  const hotel2 = await screen.findByText("OBM Hotel 2");
  const hotel3 = await screen.findByText("OBM Hotel 3");
  const hotel4 = await screen.findByText("OBM Hotel 4");
  expect(hotel1).toBeInTheDocument();
  expect(hotel2).toBeInTheDocument();
  expect(hotel3).toBeInTheDocument();
  expect(hotel4).toBeInTheDocument();
});
