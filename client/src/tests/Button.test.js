import { render, screen } from "@testing-library/react";
import Button from "./component/Button";

test("valid", () => {
    render(<Button />);
    const valid = screen.getByText(/click/i);
    expect(valid).toBeInTheDoucument();
});
