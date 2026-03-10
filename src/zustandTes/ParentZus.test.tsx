import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParentZus from "./ParentZus";

describe("ParentZus Counter", () => {

  test("render initial counter", () => {
    render(<ParentZus />);

    expect(screen.getByText(/Counter:/)).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("increment counter", async () => {
    render(<ParentZus />);

    const button = screen.getByText("Increment");

    await userEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrement counter", async () => {
    render(<ParentZus />);

    const button = screen.getByText("Decrement");

    await userEvent.click(button);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

});