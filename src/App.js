import SearchBar from './components/SearchBar';
import imageSearch from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const handleSubmit = async (term) => {
    const result = await imageSearch(term);

    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
