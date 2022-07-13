import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";


function Selectopt({
    sx,
    id,
    label,
    handleChange,
    age
}) {

      
    return (
        <>
            <Box sx={sx}>
                <FormControl fullWidth>
                    <InputLabel id={id}>{label}</InputLabel>
                    <Select
                        labelId={id}
                        id={id}
                        value={age}
                        label={label}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}

export default Selectopt;
