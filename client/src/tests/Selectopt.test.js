import { render, screen } from "@testing-library/react";
import Selectopt from "../component/Selectopt";

describe("have option", () => {
    it("options", async () => {
        render(<Selectopt options={["hello"]} />);
        const element = screen.getByRole("select");
        expect(element).toBeTruthy();
    });
});
