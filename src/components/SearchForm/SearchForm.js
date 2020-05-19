import React, { useState } from "react";
import "./SearchForm.css";
import Button from "../Utility/Button";

const SearchForm = (props) => {
  const [locationSearch, setLocationSearch] = useState("");

  const onChangeHandler = (e) => {
    setLocationSearch(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    props.searchLoc(locationSearch);
  };

  const searchLocHandler = (e) => {
    props.searchLoc(locationSearch);
  };

  return (
    <div className="SearchForm">
      <form onSubmit={submitSearchHandler}>
        <label className="SearchLabel" htmlFor="location">
          Or search:{" "}
        </label>

        <input
          className="SearchInput"
          type="text"
          name="location"
          onChange={onChangeHandler}
          
        />
        <Button type="submit" name="location" onClick={searchLocHandler}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
