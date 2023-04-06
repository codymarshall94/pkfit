import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <TextField
      id="search"
      label="Search"
      variant="outlined"
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search for a skill"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
