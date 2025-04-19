import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' 
  ? '.env.production' 
  : '.env.development';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

interface Config {
  port: number;
  db: {
    url: string;
  };
  amazon: {
    accessKey: string;
    secretKey: string;
    associateTag: string;
    region: string;
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
  cors: {
    origin: string[];
  };
}

const config: Config = {
  port: parseInt(process.env.PORT || '3001', 10),
  db: {
    url: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/spiritual_engineering_shop',
  },
  amazon: {
    accessKey: process.env.AMAZON_ACCESS_KEY || '',
    secretKey: process.env.AMAZON_SECRET_KEY || '',
    associateTag: process.env.AMAZON_ASSOCIATE_TAG || '',
    region: process.env.AMAZON_REGION || 'us-east-1',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  },
  cors: {
    origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
  },
};

export default config; 