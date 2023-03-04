import { URL_LOGIN } from '../config';
import axios from 'axios';

/**
 * Here we create a service to call the API and post the log-in data
 * @param {Object} credentials
 * @param {String} credentials.email user email
 * @param {String} credentials.password user password
 * @returns {Promise<any>} Promise object represents the response from the API
 * 
 */

export async function userLogin(credentials){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(URL_LOGIN, credentials);
            console.log(response)
            const token = response.data.body.token;
            if (token) 
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            else delete axios.defaults.headers.common['Authorization'];
            resolve(response.data);
        } catch (error) {
            reject(error);
      }
    });
}