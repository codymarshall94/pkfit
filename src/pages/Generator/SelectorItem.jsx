import { useState, useEffect } from "react";
import { Button, ButtonGroup, Typography, useTheme } from "@mui/material";

const SelectorItem = ({ label, options, value, handleClick }) => {
    const theme = useTheme();
    const [selected, setSelected] = useState(value);
  
    useEffect(() => {
      setSelected(value);
    }, [value]);
  
    return (
      <>
        <Typography
          variant="h5"
          sx={{
            margin: ".5rem 0",
            color: theme.palette.text.primary,
            fontWeight: 600,
          }}
        >
          {label}
        </Typography>
        <ButtonGroup>
          {options.map((option) => (
            <Button
              key={option}
              color="grey"
              variant={selected === option ? "contained" : "outlined"}
              onClick={() => handleClick(option)}
              sx={{ borderRadius: "2rem" }}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </>
    );
  };

    export default SelectorItem;