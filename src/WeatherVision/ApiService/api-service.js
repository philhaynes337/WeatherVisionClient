import TokenService from '../TokenService/TokenService.js';
import Config from '../config';

const ApiService = {
    getUserInfo() {
        return fetch(`${Config.API_ENDPOINT}/loggedin`)
    }
}


export default ApiService