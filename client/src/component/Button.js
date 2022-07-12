import Button from "@mui/material/Button";
import PropTypes from "prop-types";
 function Buttoon({
    variant,
    color,
    size,
    children,
    component,
    onClick,
    ...rest
}) {
    return (
        <Button
            variant={variant && variant}
            color={color}
            size={size}
            component={component}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Button>
    );
}

Buttoon.propTypes ={
    variant:PropTypes.arrayOf(["outlined", "contained","text"])
}
export default Buttoon;

