import { render, screen } from "@testing-library/react";
import Textfieldd from "../component/Textfield";

describe("have option", () => {
    it("options", async () => {
        render(<Textfieldd label="username" />);
        const element = screen.getByLabelText("username");
        expect(element).toBeTruthy();
    });
});
