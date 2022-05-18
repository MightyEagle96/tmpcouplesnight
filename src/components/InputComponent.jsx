import React from "react";
import { FormControl, InputAdornment, InputLabel, Input } from "@mui/material";
export default function InputComponent({
  icon,
  label,
  name,
  handleChange,
  value,
}) {
  return (
    <div>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
        <Input
          value={[`${value}`][`${name}`]}
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
