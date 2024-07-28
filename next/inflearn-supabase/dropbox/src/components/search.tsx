"use client";

import { Input } from "@material-tailwind/react";

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search Images"
      icon={<i className="fa-solid fa-magnifying-glass" />}
    />
  );
};

export default Search;
