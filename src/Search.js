import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching weather in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="row p-2 justify-content-center">
      <form className="col" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          onChange={updateCity}
        />
        <input type="submit" value="City" />
      </form>
    </div>
  );
}
