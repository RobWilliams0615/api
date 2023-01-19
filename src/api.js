import axios from 'axios';

const imageSearch = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID uA7dONKB3YiT_cVCrpvvMhd2s7YYqyiUzDBplaKVjqU'
    },
    params: {
      query: 'mountains'
    }
  });

  return response;
};

export default imageSearch;
