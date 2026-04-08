import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import RootLayout from "./layout";

vi.mock("../src/components/Header", () => ({
  Header: () => <header>Test Header</header>,
}));

describe("RootLayout", () => {
  it("renders global layout with theme script, header, and children", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <main>Page Content</main>
      </RootLayout>,
    );

    expect(markup).toContain("theme");
    expect(markup).toContain("Test Header");
    expect(markup).toContain("Page Content");
    expect(markup).toContain("theme-body");
  });
});
