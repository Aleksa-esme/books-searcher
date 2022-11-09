// TODO add apikey to github secrets before deploy
export const API_KEY = process.env.REACT_APP_APIKEY;

export const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
};