import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";

function AutocompleteInput({
  option,
  sx,
  id,
  renderInput,
  ...rest
}) {
  return (
      <Autocomplete
          id={id}
          options={option}
          sx={sx}
          renderInput={renderInput}
          {...rest}
      />
  );
}

export default AutocompleteInput;