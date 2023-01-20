import SearchBar from './components/SearchBar';
import imageSearch from './api';

const handleSubmit = (term) => {
  imageSearch(term);
};

function App() {
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
