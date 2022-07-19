import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";

function AutocompleteInput({
  option,
  sx,
  id,
  renderInput,
  title,
  ...rest
}) {
  return (
      <Autocomplete
          id={id}
          options={option}
          sx={sx}
          renderInput={ renderInput}
          title={title}
          {...rest}
      />
  );
}
AutocompleteInput.propTypes = {
    id: PropTypes.string,
    options: PropTypes.object,
    sx: PropTypes.object,
    renderInput: PropTypes.func,
};

export default AutocompleteInput;