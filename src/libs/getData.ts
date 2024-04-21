
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const getData = async (slug: string) => {
    const path = `${baseUrl}/${slug}/`;

    const requestOptions = {
        method: 'GET',
        tags: ['getCoinData'],
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(path, requestOptions);
        return await response.json();

    } catch (error) {
        console.error('catch error there was an error!', error);
    }

}

export default getData;
