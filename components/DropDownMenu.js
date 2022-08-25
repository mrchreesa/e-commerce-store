import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/MenuItem";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ product }) {
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const { variants } = product[0];
  console.log(size);
  return (
    <div className="dropdown-content">
      <Box sx={{ minWidth: 120, marginRight: -4 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Style</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Style"
            onChange={handleChange}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
          >
            {variants.map((variant) => (
              <Button key={variant.name} value={variant.name}>
                {variant.name}
              </Button>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
