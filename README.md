# Installation Instructions
1. Clone the repository
2. Navigate to the project directory:
   - cd Text-to-Donate
3. Install dependencies for both the frontend and backend:
   1. cd Front_end
   2. npm install
   3. cd ../Back_end
   4. npm install
4. Set up and start Docker:
   - Ensure Docker is installed and opened
   1. docker-compose up -d
   2. To check if the container is running: docker-compose ps 
6. Start the development server:
   1. cd ../Front_end
   2. npm run dev
   3. cd ../Back_end
   4. npm run dev
7. Open the app in your browser at http://localhost:5173/

# Creating a Text-to-Donate Campaign
1. Enter a unique campaign code (e.g., GIVE2024) and an existing donation link.
2. Click the create button. If successful, a pop-up indicating success will appear; otherwise, a pop-up indicating an error will appear.
