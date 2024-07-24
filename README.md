# Twitter Clone

A simplified version of Twitter, built with Node.js, Express, MongoDB, and React.

## Features

- User authentication (signup, login, logout)
- Create, edit, delete tweets
- Like and unlike tweets
- Follow and unfollow users
- View profiles and tweets of other users
- Real-time updates with WebSockets

## Technologies Used

- **Frontend:** React, MUI
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Image Upload:** Cloudinary
- **Styling:** CSS, Material-UI
- **Other:** dotenv, CORS, cookie-parser

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/twitter-clone.git
   cd twitter-clone
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # In the root directory
   npm install

   # In the frontend directory
   cd frontend
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Start the development server:

   ```bash
   # In the root directory
   npm run dev
   ```

   This will start both the frontend and backend servers concurrently.

## Usage

1. Visit `http://localhost:3000` in your browser to use the application.
2. Sign up for a new account or log in with existing credentials.
3. Explore the app by creating tweets, following other users, and more.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to update tests as appropriate.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, feel free to reach out to me:

- **Name:** Ramazan Goren
- **Email:** rmzngrn0404@gmail.com
- **Portfolio:** [Astra Innovations](https://www.astrainovations.com)
