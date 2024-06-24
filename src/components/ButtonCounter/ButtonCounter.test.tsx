import { render, fireEvent, screen } from "@testing-library/react";
import { ButtonCounter } from "./ButtonCounter";

test("ButtonCounter increments count", () => {
  render(<ButtonCounter label="Click me" />);
  const button = screen.getByText(/Click me/i);
  const countText = screen.getByText(/Count: 0/i);

  fireEvent.click(button);
  expect(countText).toHaveTextContent("Count: 1");

  fireEvent.click(button);
  expect(countText).toHaveTextContent("Count: 2");
});
