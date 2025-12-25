# BeyondChats Assignment – Full Stack Blog System

This project is a full-stack application built as part of the BeyondChats technical assignment.  
It demonstrates scraping content, storing it in a database, improving content using competitor analysis, and managing everything through a modern frontend UI.

---

## 🚀 Features

- Scrape blog articles from BeyondChats
- Store articles in MongoDB
- Perform full CRUD operations (Create, Read, Update, Delete)
- Improve articles using Google competitor analysis (SerpAPI)
- Display improved content with references
- Responsive and clean React UI
- Clear separation of frontend and backend

---

## 🏗 Project Structure

beyondchats-assignment/
│
├── backend/ # APIs, DB, scraping, improvement logic
│
├── frontend/ # React application (UI)


## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Axios
- Cheerio (for scraping)
- SerpAPI (Google search data)

### Frontend
- React
- Axios
- Inline CSS (clean & responsive UI)

---

## 📦 Backend Responsibilities

- Scrape BeyondChats blog articles
- Store articles in MongoDB
- Expose REST APIs for article management
- Improve articles using competitor data from Google

---

## 🎨 Frontend Responsibilities

- Display all articles
- Add new articles
- Delete articles
- Improve articles via API
- Show updated content and references

---

## 📄 API Endpoints

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/api/articles` | Fetch all articles |
| POST | `/api/articles` | Add a new article |
| DELETE | `/api/articles/:id` | Delete an article |
| POST | `/api/articles/:id/improve` | Improve article |

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SERP_API_KEY=your_serpapi_key

## ⚙️ Backend Commands
cd backend
npm install
npm run dev

## ⚙️ Frontend Commands

cd frontend
npm install
npm start

