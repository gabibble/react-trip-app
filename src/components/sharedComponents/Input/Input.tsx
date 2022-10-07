import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

interface inputType {
  name: string;
  placeholder?: string;
  defaultValue?: any;
  type: string;
  label?: string;
}

export const Input = forwardRef((props: inputType, ref) => {

  return (
    <TextField
      variant="outlined"
      margin="normal"
      size="small"
      inputRef={ref}
      fullWidth
      {...props}
    ></TextField>
  );
});
