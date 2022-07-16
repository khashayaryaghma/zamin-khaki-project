import AutocompleteInput from "../component/AutocompleteInput";
import { TextField } from "@mui/material";
import topFilms from "../constant/topFilms"

export default {
    title: "Autocomplete",
    component: AutocompleteInput,
};

export const Template = (args) => (
    <AutocompleteInput
        renderInput={(params) => <TextField {...params} label="Movie" />}
        option={topFilms}
    />
);

