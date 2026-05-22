User Management App — Frontend

This folder contains the React frontend for the User Management application, built with Vite.

**Quick overview**
- Framework: React
- Bundler: Vite
- Styling: TailwindCSS (configured)

**What this README covers**: prerequisites, how to run the frontend, how to run the backend for local development, and a brief project structure.

## Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node) or an alternative package manager
- A running MongoDB instance (local or Atlas) for the backend

## Frontend — Install & Run
1. Install dependencies:

   npm install

2. Start the dev server:

   npm run dev

3. Open the app in your browser:

   http://localhost:5173

Available npm scripts (see package.json):
- `dev`: run the development server (`vite`)
- `build`: build for production (`vite build`)
- `preview`: preview a production build (`vite preview`)
- `lint`: run ESLint across the project

## Backend — Local setup (brief)
This repository includes a simple Express/Mongo backend in the `Backend/` folder. The frontend expects the backend API to be available and CORS is configured to allow `http://localhost:5173`.

1. Open a new terminal and change to the backend folder:

   cd ../Backend

2. Install backend dependencies:

   npm install

3. Create a `.env` file with the following variables (example):

   PORT=5000
   DB_URL=mongodb://localhost:27017/usermanagement

4. Start the backend:

   node Server.js

Note: `Server.js` reads `DB_URL` and `PORT` from environment variables. The server will print the port when it starts.

## Project structure (frontend)
- `src/` — main React source
  - `main.jsx` — app entry
  - `App.jsx` — application shell
  - `Components/` — UI components (`AddUser.jsx`, `UsersList.jsx`, etc.)
- `public/` — static assets

## Notes & tips
- The backend requires a MongoDB connection. If using MongoDB Atlas, set `DB_URL` accordingly.
- If you want automatic backend restarts during development, install `nodemon` and run `nodemon Server.js` in the `Backend/` folder.
- ESLint is configured; run `npm run lint` from the `Frontend/` folder to check lint issues.

If you'd like, I can also:
- add a `start` script to the backend `package.json`, or
- add a `concurrently` script to start both front and backend with a single command.

---
Updated to include project-specific setup and run instructions.
