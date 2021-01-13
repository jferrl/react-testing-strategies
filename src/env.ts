export interface Env {
    url: {
        API_URL: string;
        API_KEY: string;
    };
    reduxLoggerEnabled: boolean;
}

const prod: Env = {
    url: {
        API_URL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
        API_KEY: 'C4rhE3Yzc0jeVBPObgfySnfezSWThrNyod00sPS8'
    },
    reduxLoggerEnabled: false
};

const dev: Env = {
    url: {
        API_URL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
        API_KEY: 'C4rhE3Yzc0jeVBPObgfySnfezSWThrNyod00sPS8'
    },
    reduxLoggerEnabled: true
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
