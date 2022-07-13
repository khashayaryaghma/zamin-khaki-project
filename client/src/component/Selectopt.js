import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Selectopt() {
    return (
        <>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </>
    );
}

export default Selectopt;
