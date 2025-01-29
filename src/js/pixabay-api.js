const API_KEY = '48520843-c7005fc601dadff0df2bc86d2';
const BASE_URL = 'https://pixabay.com/api/';
const searchParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
function getPhotos(query) {
  const searchOptions = new URLSearchParams({ ...searchParams, q: query });
  //   console.log(searchOptions.toString());
  fetch(`${BASE_URL}?${searchOptions}`).then(response => {
    console.log(response);
  });
}
getPhotos('Flower');
