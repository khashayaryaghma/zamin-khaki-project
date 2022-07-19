import { render, screen } from "@testing-library/react";
import Button from "../component/Button";

describe("text-click", () => {
    it("have click text", async () => {
        render(<Button children="Click" />);
        const valid = screen.getByText(/click/i);
        expect(valid).toBeInTheDocument();
    });
});
