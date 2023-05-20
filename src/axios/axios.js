import axios, {interceptors} from "axios";

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1'

const settings = {
	headers: {
		'Content-type': 'application/JSON',
		'Accept': 'application/json'
	},
	timeout: 3000,
}

export const instance = axios.create({
	baseURL: BASE_URL,
	...settings
})


export const instanceAuth = axios.create({
	baseURL: BASE_URL,
	...settings,

})

instanceAuth.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	config.headers['Authorization'] = `Bearer ${token}`;
	return config
})