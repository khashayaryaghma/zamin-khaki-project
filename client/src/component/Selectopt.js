import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function Selectopt({ sx, id, label, handleChange, name, options }) {
    return (
        <>
            <Box sx={sx}>
                    <InputLabel id={id}>{label}</InputLabel>
                    <Select
                        labelId={id}
                        id={id}
                        value={name}
                        label={label}
                        onChange={handleChange}

                    >
                        {options.map((ele) => {
                            return <MenuItem value={ele}>{ele}</MenuItem>;
                        })}
                    </Select>
            </Box>
        </>
    );
}

Selectopt.propTypes = {
    sx: PropTypes.object,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    handleChange: PropTypes.func,
};
export default Selectopt;
