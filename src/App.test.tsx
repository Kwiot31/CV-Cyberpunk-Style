import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders language selector heading before selecting language", () => {
    render(<App />);

    expect(screen.getByText(/choose/i)).toBeInTheDocument();
    expect(screen.getByText(/language/i)).toBeInTheDocument();
  });
});
