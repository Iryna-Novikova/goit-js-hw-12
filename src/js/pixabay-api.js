import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const myApiKey = '50600244-46274b1c7bbfed49553e909c7';
export const perPage = 15;

export const getImagesByQuery = async (query, page) => {
    // параметри запиту
    const params = {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
    };
   
    const response = await axios.get('/api/', { params })
    return response.data;
}
