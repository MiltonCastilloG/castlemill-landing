import React from "react";
import { render, screen } from "@testing-library/react";
import { CurriculumArticleCard, CurriculumInsetCard } from "./CurriculumArticleCard";

describe("CurriculumArticleCard", () => {
  it("renders children inside an article with base classes", () => {
    render(
      <CurriculumArticleCard>
        <h2>Section Title</h2>
      </CurriculumArticleCard>,
    );

    const heading = screen.getByRole("heading", { name: "Section Title" });
    const article = heading.closest("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("rounded-2xl");
    expect(article).toHaveClass("bg-secondary/45");
  });

  it("merges extra classes", () => {
    render(
      <CurriculumArticleCard className="custom-panel">
        <p>Content</p>
      </CurriculumArticleCard>,
    );

    const article = screen.getByText("Content").closest("article");
    expect(article).toHaveClass("custom-panel");
  });
});

describe("CurriculumInsetCard", () => {
  it("renders as div by default", () => {
    render(<CurriculumInsetCard>Inset</CurriculumInsetCard>);

    const div = screen.getByText("Inset").closest("div");
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass("rounded-lg");
    expect(div).toHaveClass("bg-lime-50/80");
  });

  it("renders as article when requested", () => {
    render(<CurriculumInsetCard as="article">Inset Article</CurriculumInsetCard>);

    const article = screen.getByText("Inset Article").closest("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("rounded-lg");
  });
});
