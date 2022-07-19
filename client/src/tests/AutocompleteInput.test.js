import { render, screen } from "@testing-library/react";
import AutocompleteInput from "../component/AutocompleteInput";

describe("have option", () => {
    it("options", async () => {
        render(<AutocompleteInput title="autocomplete" />);
        const element = screen.getByTitle("autocomplete");
        expect(element).toBeInTheDocument();
    });
});
