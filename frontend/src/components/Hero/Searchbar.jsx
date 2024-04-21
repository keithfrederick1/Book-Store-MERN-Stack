import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div>
      <TextField
        id="search"
        label="Enter patient name, MRN, or ZIP code"
        variant="standard"
        sx={{ marginRight: 1, 
              height: 32,
              width: 500, }}
      />
      <Button variant="text" startIcon={<SearchIcon />}>
      </Button>
    </div>
  );
};

export default SearchBar;