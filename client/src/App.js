import Button from "./component/Button";
import AutocompleteInput from "./component/AutocompleteInput";
import Textfieldd from "./component/Textfield";
import TextField from "@mui/material/TextField";
import top100Films from "./constant/topFilms";
import Selectopt from "./component/Selectopt";
import { useState } from "react";

function App() {
const [age, setAge] = useState("");

const handleChange = (event) => {
    setAge(event.target.value);
};
    return (
        <>
            <Button
                variant="outlined"
                color="secondary"
                size="medium"
                component="a"
                disabled
            >
                click
            </Button>
            <AutocompleteInput
                disablePortal
                option={top100Films}
                sx={{ width: 300 }}
                id="combo-box"
                renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                )}
            />
            <Textfieldd
                id="textInput"
                label="username"
                variant="outlined"
                color="secondary"
                size="medium"
            />
            <Selectopt
                handleChange={handleChange}
                age={age}
                label="age"
                id="select"
                sx={{ maxWidth: 160 }}
            />
        </>
    );
}

export default App;
