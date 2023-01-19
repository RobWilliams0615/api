function SearchBar() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log('parent needs some data');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
