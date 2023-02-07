import axios from 'axios';

const defaultInstance = axios.create({ baseURL: 'http://210.99.35.26:8081' });

export default defaultInstance;
