import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

function Textfieldd({ id, label, variant, color, size, ...rest }) {
    return (
        <>
            <TextField
                id={id}
                label={label}
                variant={variant}
                size={size}
                color={color}
                {...rest}
            />
        </>
    );
}

Textfieldd.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.oneOf([
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
    ]),
    size: PropTypes.oneOf(["small", "medium"]),
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
};

export default Textfieldd;
