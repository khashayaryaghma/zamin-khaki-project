import { render, screen } from "@testing-library/react";
import Button from "../component/Button";

//get by

test("have click text", async () => {
    render(<Button children="Click"/>);
    const valid = screen.getByText(/click/i);
    expect(valid).toBeInTheDocument();
});

it("Role", async () => {
    render(<Button />);
    const valid = screen.getByRole("button");
    expect(valid).toBeInTheDocument();
});

it("Role2", async () => {
    render(<Button children="click" />);
    const valid = screen.getByRole("button", {name:"click"});
    expect(valid).toBeInTheDocument();
});

//testid

it("testid", async () => {
    render(<Button children="click" />);
    const valid = screen.getByTestId("buttoon");
    expect(valid).toBeInTheDocument();
});


//find by (use async await)

test("have click text-2", async () => {
    render(<Button children="Click" />);
    const valid = await screen.findByText(/click/i);
    expect(valid).toBeInTheDocument();
});


//query by

it("have click text-3", () => {
    render(<Button children="Click" />);
    const valid = screen.queryByText(/cats/i);
    expect(valid).not.toBeInTheDocument();
});

//getall

it("have click text-4", () => {
    render(<Button />);
    const valids = screen.getAllByRole("button");
    expect(valids.length).toBe(1);
});