import SearchBar from './components/SearchBar';
import imageSearch from './api';
import ImageList from './components/ImageList';

const handleSubmit = async (term) => {
  const result = await imageSearch(term);

  console.log(result);
};

function App() {
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
