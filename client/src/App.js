import Button from "./component/Button";
import AutocompleteInput from "./component/AutocompleteInput";
import Textfieldd from "./component/Textfield";
import TextField from "@mui/material/TextField";
import top100Films from "./constant/topFilms";
import Selectopt from "./component/Selectopt";


function App() {

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
            <Selectopt />
        </>
    );
}

export default App;
