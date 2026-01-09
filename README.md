# Contact Management Web App (MERN)

## Objective
Build a simple contact management application demonstrating MERN stack fundamentals.

## Tech Stack
- Frontend: React.js (Vite)
- Backend: Node.js, Express.js
- Database: MongoDB
- Styling: Tailwind CSS
- State Management: useState

## Features
- Add contact with validation
- Email & phone number validation
- Store contacts in MongoDB
- View contacts without page reload
- Delete contact
- Responsive UI
- Success messages

## Validation Rules
- Name: Required
- Phone: Required, 10 digits
- Email: Valid format (optional)

## Folder Structure
contact/
├── backend
└── frontend


## Setup Instructions

### Backend
```bash
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm run dev

### API Endpoints

POST /api/contacts

GET /api/contacts

DELETE /api/contacts/:id
