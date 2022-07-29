import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import fetch from "node-fetch";
import { beforeEach } from "vitest";
import { describe, it, expect } from "vitest";
import Doctors from "../components/pages/Doctors";

global.fetch = fetch;

describe("Doctors", () => {
  beforeEach(() => {
    render(<Doctors />);
  });

  it("Displays the Header component with the title 'Doctors'", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Doctors"
    );
  });

  it("Displays information for all three doctors", async () => {
    await expect(screen.getByText("Dr. Zimmak"))
      .toBeInTheDocument;
    await expect(screen.getByText("Dr. Yousaf"))
      .toBeInTheDocument;
    await expect(screen.getByText("Dr. Distel"))
      .toBeInTheDocument;
  });
});
