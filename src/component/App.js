import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
function App() {
  const handleTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term,
      },
    });
  };

  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="ui container">
      <SearchBar handleTermSubmit={handleTermSubmit} />
    </div>
  );
}

export default App;
