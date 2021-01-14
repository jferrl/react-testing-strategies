import { config } from '../env';

export const fetchMarsPhotos = async (date: string, init?: RequestInit, throwError: boolean = true): Promise<Response> => {
    const uri = buildMarsPhotosApiUri(date);
    const response = await fetch(uri, init);

    if (!response.ok && throwError) {
        throw new Error(response.statusText);
    }

    return response;
};

const buildMarsPhotosApiUri = (date: string): string => {
    return `${config.url.API_URL}curiosity/photos?earth_date=${date}&api_key=${config.url.API_KEY}`;
};
