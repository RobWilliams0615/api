import SearchBar from './components/SearchBar';
import imageSearch from './api';

const handleSubmit = async (term) => {
  const result = await imageSearch(term);

  console.log(result);
};

function App() {
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
