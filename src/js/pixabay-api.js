import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const myApiKey = '50600244-46274b1c7bbfed49553e909c7';

export const getImagesByQuery = (query) => {
    // параметри запиту
    const params = {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
   
    return axios.get('/api/', { params }).then(response => response.data);
}
