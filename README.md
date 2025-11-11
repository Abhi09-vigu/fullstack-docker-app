# Fullstack Docker App

A fullstack application with React frontend, Node.js/Express backend, and PostgreSQL database, all containerized with Docker.

## Project Structure

```
fullstack-docker-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── package.json
│   ├── Dockerfile
│   └── src/
│       └── App.js
├── db-data/                    # Database volume directory
├── docker-compose.yml          # Docker Compose configuration
├── .env                        # Environment variables
└── README.md                   # This file
```

## Tech Stack

- **Frontend**: React 18.2.0
- **Backend**: Node.js + Express 4.18.2
- **Database**: PostgreSQL
- **Container**: Docker & Docker Compose

## Setup Instructions

### Prerequisites
- Docker and Docker Compose installed
- Node.js (for local development without Docker)

### Getting Started

1. **Clone or navigate to the project directory**
   ```bash
   cd fullstack-docker-app
   ```

2. **Initialize Git (if needed)**
   ```bash
   git init
   ```

3. **Configure environment variables**
   - Edit the `.env` file and add database configuration:
   ```
   DB_HOST=postgres
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=testdb
   DB_PORT=5432
   ```

4. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## Development

### Backend Development
```bash
cd backend
npm install
npm start
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `GET /api` - Returns current server time from PostgreSQL database

## Environment Variables

- `DB_HOST` - PostgreSQL host (default: localhost)
- `DB_USER` - PostgreSQL user (default: postgres)
- `DB_PASSWORD` - PostgreSQL password (default: postgres)
- `DB_NAME` - PostgreSQL database name (default: testdb)
- `DB_PORT` - PostgreSQL port (default: 5432)

## Notes

- The frontend is configured to proxy API requests to the backend at `http://localhost:5000`
- Database data is persisted in the `db-data/` volume directory
- Dockerfiles are ready to be populated with appropriate configurations
