export const fetchingData = async (url, headers) => {
    try {
        const response = await fetch(url, headers)
        const data = await response.json();
        return data?.results;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
