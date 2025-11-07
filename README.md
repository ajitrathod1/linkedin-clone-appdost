# LinkedClone (Mini LinkedIn Clone)

Simple full-stack social feed app with signup/login, create post, and public feed.

## Tech stack
- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: MongoDB (Atlas)
- Auth: JWT, passwords hashed with bcrypt

## Run locally

### Backend
1. Open terminal:
```bash
cd linkedclone/backend
cp .env.example .env
# edit .env and set MONGO_URI and JWT_SECRET
npm install
npm run dev
