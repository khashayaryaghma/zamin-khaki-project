import { render, screen } from "@testing-library/react";
import Button from "../component/Button";

test("valid",async () => {
    render(<Button children="Click"/>);
    const valid = screen.getByText(/click/i);
    expect(valid).toBeInTheDocument();
});
