import { Rovers } from '../@types/rover';
import { config } from '../env';

export const fetchMarsPhotos = async (roverType: Rovers = Rovers.Curiosity, init?: RequestInit, throwError: boolean = true): Promise<Response> => {
    const uri = buildMarsPhotosApiUri(roverType);
    const response = await fetch(uri, init);

    if (!response.ok && throwError) {
        throw new Error(response.statusText);
    }

    return response;
};

const buildMarsPhotosApiUri = (roverType: Rovers): string => {
    let type = '';
    switch (roverType) {
        case Rovers.Curiosity:
            type = Rovers.Curiosity;
            break;
        case Rovers.Opportunity:
            type = Rovers.Opportunity;
            break;
        case Rovers.Spirit:
            type = Rovers.Spirit;
            break;
    }

    return `${config.url.API_URL}${type}/photos?sol=1000&api_key=DEMO_KEY`;
};
