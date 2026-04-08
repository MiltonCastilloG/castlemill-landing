import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

vi.mock("../src/components/LandingBanner", () => ({
  LandingBanner: () => <section data-testid="landing-banner">Banner</section>,
}));

describe("HomePage", () => {
  it("renders the landing banner", () => {
    render(<HomePage />);

    expect(screen.getByTestId("landing-banner")).toBeInTheDocument();
  });
});
