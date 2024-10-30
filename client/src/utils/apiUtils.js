


// src/utils/apiUtils.js
export const logApiRequest = async (url, options) => {
    console.log(`API Request to ${url}`, options);
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(`Response from ${url}`, data);
        return data;
    } catch (error) {
        console.error(`Error from ${url}`, error);
        throw error;
    }
};

export default logApiRequest;