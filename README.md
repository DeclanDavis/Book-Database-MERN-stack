# Book Database NoSQL Full Stack MERN

## Overview
This is a simple application with a database of books. The user can perform full CRUD operations on the database.

## Technologies Used

### Frontend
- React
- Axios
- Tailwind CSS
- HTML
- CSS

### Backend
- Express.js
- Node.js
- CORS
- MongoDB Atlas
- Postman

### Browser
- Google Chrome Version 126.0.6478.128 (Official Build) (64-bit)

### Operating System
- Windows

## Project Setup

### Backend Setup
1. **Install Node.js:**
   - [Download Node.js](https://nodejs.org/en/download)
   - Initialize npm: `cd backend` then `npm init -y`

2. **Install Dependencies:**
   - Express for the server: `npm i express`
   - Nodemon for automatic server restarts: `npm i nodemon`
   - Mongoose for MongoDB connection: `npm i mongoose`
   - Dotenv for environment variables: `npm i dotenv`
   - CORS for cross-origin requests: `npm i cors`

3. **Run the Backend:**
   - Start the server: `cd backend` then `npm run dev`
   - Expected output:
     ```
     [nodemon] 3.1.0
     [nodemon] to restart at any time, enter `rs`
     [nodemon] watching path(s): *.*
     [nodemon] watching extensions: js,mjs,cjs,json
     [nodemon] starting `node index.js`
     App connected to the database!
     App is listening to port: 5555
     ```

### Frontend Setup
1. **Create Frontend:**
   - `cd main`
   - `npm create vite@latest` (project name: `frontend`)
   - Choose React and JavaScript

2. **Install Dependencies:**
   - Navigate to frontend: `cd frontend`
   - Install packages: `npm i`
   - Tailwind CSS setup: `npm install -D tailwindcss postcss autoprefixer` then `npx tailwindcss init -p`
   - React Router: `npm i react-router-dom`
   - Axios for HTTP requests: `npm i axios`
   - React Icons for icons: `npm i react-icons`
   - Notistack for notifications: `npm i notistack`

3. **Run the Frontend:**
   - Start the frontend: `cd frontend` then `npm run dev`
   - Expected output:
     ```
     VITE v5.2.12 ready in 1028 ms
     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
     ```

## Database Design
This is a simple database with one collection: `books`.

Each book has the following attributes:
- `title` (String)
- `author` (String)
- `publishYear` (Number)
- `description` (String)
- `timestamps` (created and updated dates automatically recorded)

## Running the Project
1. **Backend:**
   - `cd backend`
   - `npm run dev`

2. **Frontend:**
   - `cd frontend`
   - `npm run dev`
   - Open `http://localhost:5173/` in your browser

## Testing Backend Routes in Postman
1. **Create a new book (POST):**
   - `http://localhost:5555/books`
   - Body (raw JSON):
     ```json
     {
       "title": "Test Book 1",
       "author": "Test Author 1",
       "description": "Test book description.",
       "publishYear": 2024
     }
     ```

2. **Retrieve all books (GET):**
   - `http://localhost:5555/books`

3. **Retrieve a book by ID (GET):**
   - `http://localhost:5555/books/665a1bca21a094af001a007a`

4. **Update a book by ID (PUT):**
   - `http://localhost:5555/books/666199665d4e013c11a2e1d5`
   - Body (raw JSON):
     ```json
     {
       "title": "Updated Test Book 1",
       "author": "Updated Test Author 1",
       "description": "Updated description.",
       "publishYear": 2024
     }
     ```

5. **Delete a book by ID (DELETE):**
   - `http://localhost:5555/books/661bed15bd766897c0746b9e`

## Frontend Pages and Components

### Pages
1. **Home**
2. **CreateBooks**
3. **RetrieveBooks**
4. **UpdateBook**
5. **DeleteBook**

### Components

1. **BookModal.jsx**
   The `BookModal` component is a modal dialog that displays detailed information about a selected book. It includes:
   - `AIOutlineClose` icon from `react-icons/ai` for closing the modal.
   - The book's publication year, ID, title, author, and description are displayed within the modal.
   - The modal content is styled with Tailwind CSS classes for a responsive and visually appealing layout.

2. **BooksCard.jsx**
   The `BooksCard` component renders a grid layout of book items. It includes:
   - A mapping function that iterates through the `books` array, passing each book item to the `BookSingleCard` component.
   - Tailwind CSS classes ensure the grid is responsive across different screen sizes.

3. **BooksSingleCard.jsx**
   The `BookSingleCard` component represents a single book item in the grid. It includes:
   - Book details such as the publication year, ID, title, and author.
   - Icons from `react-icons` library to indicate actions like viewing more details or editing the book.
   - An `onClick` event to open the `BookModal` component for displaying detailed information about the book.
   - Links for navigating to detailed view, update, and delete pages for the book.

4. **BooksTable.jsx**
   The `BooksTable` component handles the tabular display of book data. It includes:
   - A table structure to list books with columns for various attributes such as title, author, publication year, etc.
   - Interaction elements for editing or deleting book entries.

5. **Spinner.jsx**
   A spinning animation to indicate loading.

6. **BackButton.jsx**
   Clicking navigates the user to the Home page.

These components together form the core user interface for managing books in the application, utilizing a combination of React, Tailwind CSS, and `react-icons` for a modern, responsive design.

## References

### Tutorials
- [MERN Stack Tutorial - Book Store Project](https://www.youtube.com/watch?v=-42K44A1oMA)

### Documentation
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)

### Tools and Services
- [MongoDB Atlas](https://cloud.mongodb.com/v2/661678c40cd39b0f679b4ca2#/metrics/replicaSet/661ec4062c13213b53550cae/explorer/test/mobilephones/find)
- [Postman](https://web.postman.co/)
