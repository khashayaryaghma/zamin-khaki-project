import { render, screen } from "@testing-library/react";
import Button from "../component/Button";

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


//find by


