const getData = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return [];
    }
};

export default getData;