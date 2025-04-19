declare module 'paapi5-nodejs-sdk' {
    export class Config {
        constructor(config: {
            accessKey: string;
            secretKey: string;
            partnerTag: string;
            host: string;
            region: string;
        });

        static ApiClient: new (config: Config) => {
            searchItems: (request: any) => Promise<any>;
            getItems: (request: any) => Promise<any>;
        };
    }
} 