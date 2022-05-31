export const getInitialPosts = async (type ='', query = '') => {
    const url = 'https://www.reddit.com';
    const requestUrl = '/r/popular.json';
    const response = await fetch(`${url}${requestUrl}`, {
        method: 'GET'
    });
    const json = await response.json();
    return json;
}