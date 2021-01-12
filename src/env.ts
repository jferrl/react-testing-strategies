export interface Env {
    url: {
        API_URL: string;
    };
    reduxLoggerEnabled: boolean;
}

const prod: Env = {
    url: {
        API_URL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
    },
    reduxLoggerEnabled: false
};

const dev: Env = {
    url: {
        API_URL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
    },
    reduxLoggerEnabled: true
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
