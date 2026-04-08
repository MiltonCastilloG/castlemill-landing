import "@testing-library/jest-dom/vitest";
import React from "react";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.PropsWithChildren<{ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>>) =>
    React.createElement("a", { href, ...props }, children),
}));
