import axios from "axios";
import { URL_PROFILE } from "../config";

/**
 * Here we create a service to call the API and get the user data like firstname and lastname
 */

export async function getUserData() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(URL_PROFILE);
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    });
}