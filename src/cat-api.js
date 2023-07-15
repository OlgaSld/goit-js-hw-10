import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_uy6OKI0Ur8IbFUfC2ojKk4ssfmS2UpM1yL4a2ruzBDTQMfShCzwSVN7jFtou3zVy';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// API_KEY = 'live_uy6OKI0Ur8IbFUfC2ojKk4ssfmS2UpM1yL4a2ruzBDTQMfShCzwSVN7jFtou3zVy';

export function fetchBreeds() {
    return axios.get(`/breeds`)
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.status);
        }
    return response.data;
    })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.data;
        })
}
