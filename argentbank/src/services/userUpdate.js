import axios from "axios";
import { URL_PROFILE } from "../config";

/**
 * Service to update the user data firstName and lastName
 * @param {object} data
 * @param {string} data.firstName
 * @param {string} data.lastName
 *  
 * @returns {Promise}
 */

export async function userUpdate(newName){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.put(URL_PROFILE, newName);
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    });
}