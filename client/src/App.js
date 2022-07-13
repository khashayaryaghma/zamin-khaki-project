import Button from "./component/Button";
import AutocompleteInput from "./component/AutocompleteInput";
import Textfieldd from "./component/Textfield";
import TextField from "@mui/material/TextField";
import Selectopt from "./component/Selectopt";
import { useState } from "react";



import top100Films from "./constant/topFilms";
import options from "./constant/options";

function App() {
const [name, setName] = useState("");

const handleChange = (event) => {
    setName(event.target.value);
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
                name={name}
                label="name"
                id="select"
                sx={{ maxWidth: 160 }}
                options={options}
            />
        </>
    );
}

export default App;
