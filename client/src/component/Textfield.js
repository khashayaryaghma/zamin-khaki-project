import TextField from "@mui/material/TextField";

function Textfieldd({
    id,
    label,
    variant,
    color,
    size,
    ...rest
}) {
    return (<>
     <TextField id={id} label={label} variant={variant} size={size} color={color} {...rest}/>
    </>
        
    );
}

export default Textfieldd;
