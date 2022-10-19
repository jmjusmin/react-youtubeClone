import React, { useState } from 'react';

function SearchBar() {
  const [term, setTerm] = useState('');
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    //prevent from auto submit form
    e.preventDefault();

    //callback from parent component
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
