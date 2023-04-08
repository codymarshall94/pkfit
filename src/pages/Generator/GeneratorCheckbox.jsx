import { Checkbox, FormControlLabel, useTheme } from '@mui/material';

const GeneratorCheckbox = ({ label, value, handleClick, isDisabled }) => {
    const theme = useTheme();
  
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={() => handleClick(!value)}
            disabled={isDisabled}
            sx={{ color: theme.palette.text.primary }}
          />
        }
        label={label}
      />
    );
  };

export default GeneratorCheckbox;