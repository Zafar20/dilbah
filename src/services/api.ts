import axios from 'axios'
const BASE_URL =  'https://apidilbahdairy.uz/api/v1/';


export function changetoHttps (url: string) {
    let secureUrl = url.replace("http://", "https://");
    return secureUrl
}

export async function fetcher(endpoint: string, options = {}) {
    let {data } = await axios.get(`${BASE_URL}${endpoint}`, options)
    return data
}

