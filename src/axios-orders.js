import axios from 'axios';
// git global email change

const instance = axios.create({
    baseURL: 'https://quarantine-food-delivery.firebaseio.com/' 
});

export default instance;