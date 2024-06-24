### README for Van Life App

# Van Life App

Welcome to the Van Life App! This application helps users manage and explore various aspects of van life, including finding and sharing van-friendly locations, tips, and resources. The app uses Firebase for the database and is deployed on Netlify with Continuous Integration and Continuous Deployment (CI/CD). 

https://vanlifeee.netlify.app/

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Firebase Configuration](#firebase-configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Reviews**: Users can share reviews.
- **User Authentication**: Secure user authentication with Firebase Auth.
- **Real-time Database**: Data is stored and retrieved in real-time using Firebase Firestore.
- **Responsive Design**: Optimized for both mobile and desktop use.

## Technologies Used
- **Frontend**: React
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Deployment**: Netlify
- **CI/CD**: Netlify CI/CD

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mogunm/van-life.git
   cd van-life
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Firebase Configuration**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Create a `.env` file in the root directory and add your Firebase configuration:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```
   - Initialize Firebase Firestore and Authentication in your Firebase project.

4. **Run the App Locally**:
   ```bash
   npm start
   ```

5. **Build the App**:
   ```bash
   npm run build
   ```

## Firebase Configuration
Ensure you have the following Firebase services enabled in your Firebase project:
- **Firestore Database**: For real-time data storage and retrieval.
- **Authentication**: For managing user sign-in and sign-out.

## Deployment
The app is deployed on Netlify with CI/CD. Follow these steps for deployment:

1. **Create a Netlify Account** at [Netlify](https://www.netlify.com/).
2. **Connect Your GitHub Repository**: Follow the instructions to connect your GitHub repository to Netlify.
3. **Environment Variables**: Set your Firebase configuration variables in the Netlify dashboard under Site Settings > Build & Deploy > Environment > Environment Variables.
4. **Deploy**: Your app will be automatically built and deployed with each push to the main branch.

## Contributing
We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository**.
2. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to the Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request**: Describe your changes and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out with any questions or feedback. Enjoy using the Van Life App!