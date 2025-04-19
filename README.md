# Spiritual Engineering Shop

A full-stack e-commerce application for spiritual and engineering products, integrated with Amazon's Product Advertising API.

## Features

- User authentication (email/password, Google, Facebook)
- Product browsing and search
- Shopping cart functionality
- Order management
- Product reviews and ratings
- Amazon product integration
- Admin dashboard

## Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ShadCN UI
- React Query
- NextAuth.js

### Backend
- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- Amazon Product Advertising API
- JWT Authentication

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- Amazon Product Advertising API credentials
- Google OAuth credentials (optional)
- Facebook App credentials (optional)

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/eToro/TestYogaShop.git
cd TestYogaShop
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env.development` file in the backend directory with:
```
DATABASE_URL="postgresql://user:password@localhost:5432/spiritual_engineering_shop_dev"
AMAZON_ACCESS_KEY="your_amazon_access_key"
AMAZON_SECRET_KEY="your_amazon_secret_key"
AMAZON_ASSOCIATE_TAG="your_associate_tag"
JWT_SECRET="your_jwt_secret"
```

Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

Start the development server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env.development` file in the frontend directory with:
```
NEXT_PUBLIC_API_BASE_URL="http://localhost:3001"
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG="your_associate_tag"
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your_google_client_id"
NEXT_PUBLIC_FACEBOOK_APP_ID="your_facebook_app_id"
```

Start the development server:
```bash
npm run dev
```

## Development Workflow

1. Create a new branch from `develop`:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "feat: your feature description"
```

3. Push your branch and create a pull request:
```bash
git push origin feature/your-feature-name
```

4. After review, merge to `develop`

## Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `release/*` - Release preparation branches
- `hotfix/*` - Hotfix branches for production issues

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 