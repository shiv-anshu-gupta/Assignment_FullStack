Location App
This is a full-stack location management application built with React (Frontend) and Node.js + Express (Backend). It allows users to manage and view addresses with a map interface, providing features like adding, updating, and deleting addresses.

Features
View a list of addresses.
Add new addresses with coordinates.
Update or delete existing addresses.
Integration with Google Maps for location visualization.
Technologies Used
Frontend: React, React Router, Axios
Backend: Node.js, Express, MongoDB
Map: Google Maps API
Setup
Backend
Clone the repository.
Navigate to the backend folder:

Copy code
cd backend
Install dependencies:

Copy code
npm install
Create a .env file and add your MongoDB connection string and Google Maps API key:
env
Copy code
MONGO_URI=your_mongodb_connection_string
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
Start the backend server:

Copy code
npm start
Frontend
Navigate to the frontend folder:

Copy code
cd frontend
Install dependencies:

Copy code
npm install
Start the frontend server:

Copy code
npm start
License
This project is licensed under the MIT License.
