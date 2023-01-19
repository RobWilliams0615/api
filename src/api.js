import axios from 'axios';

const imageSearch = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID uA7dONKB3YiT_cVCrpvvMhd2s7YYqyiUzDBplaKVjqU'
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default imageSearch;
