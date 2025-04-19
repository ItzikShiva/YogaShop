interface Config {
  api: {
    baseUrl: string;
  };
  amazon: {
    associateTag: string;
  };
  auth: {
    googleClientId?: string;
    facebookAppId?: string;
  };
}

const config: Config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  },
  amazon: {
    associateTag: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || '',
  },
  auth: {
    googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    facebookAppId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
  },
};

export default config; 