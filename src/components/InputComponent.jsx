import React from "react";
import { FormControl, InputAdornment, InputLabel, Input } from "@mui/material";
export default function InputComponent({
  icon,
  label,
  name,
  handleChange,
  value,
  multiline,
  rows,
  required,
}) {
  return (
    <div>
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
        <Input
          required={required}
          value={value[`${name}`]}
          multiline={multiline}
          rows={rows}
          name={name}
          onChange={handleChange}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">{icon}</InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
