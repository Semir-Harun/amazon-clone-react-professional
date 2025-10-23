# 🛒 Amazon Clone - React E-Commerce Application

<div align="center">
  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://clone-mar21.web.app/)
[![GitHub Issues](https://img.shields.io/github/issues/Semir-Harun/amazon-clone-react-professional?style=for-the-badge)](https://github.com/Semir-Harun/amazon-clone-react-professional/issues)
[![GitHub Stars](https://img.shields.io/github/stars/Semir-Harun/amazon-clone-react-professional?style=for-the-badge)](https://github.com/Semir-Harun/amazon-clone-react-professional/stargazers)
[![CI/CD Pipeline](https://img.shields.io/github/actions/workflow/status/Semir-Harun/amazon-clone-react-professional/ci-cd.yml?branch=main&style=for-the-badge&label=CI%2FCD)](https://github.com/Semir-Harun/amazon-clone-react-professional/actions)

</div>

## 📖 About The Project

A full-featured Amazon clone built with React and Firebase, showcasing modern e-commerce functionality including user authentication, product catalog, shopping cart management, and real-time data synchronization.

### ✨ Key Features

- 🔐 **User Authentication** - Secure login/logout with Firebase Auth
- 🛍️ **Product Catalog** - Browse and search products
- 🛒 **Shopping Cart** - Add, remove, and manage cart items
- 💳 **Order Management** - Track and manage customer orders  
- 📱 **Responsive Design** - Mobile-first responsive UI
- 🔥 **Real-time Updates** - Live cart and order synchronization
- 🎨 **Material Design** - Modern UI with Material-UI components
- ⚡ **Fast Performance** - Optimized React application

## 🚀 Demo

**Live Application:** [https://clone-mar21.web.app/](https://clone-mar21.web.app/)

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT SIDE (React)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Header    │  │    Home     │  │    Cart     │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│         │                │                │               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Login     │  │   Product   │  │  CartItem   │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────┤
│                    STATE MANAGEMENT                        │
│   • Local State (useState, useEffect)                     │
│   • Context API for user authentication                   │
│   • Firebase real-time listeners                          │
├─────────────────────────────────────────────────────────────┤
│                     BACKEND (Firebase)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │Firebase Auth│  │  Firestore  │  │   Hosting   │        │
│  │• Google Auth│  │• Products   │  │• Static Site│        │
│  │• User Mgmt  │  │• Cart Items │  │• SSL/CDN    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### Screenshots

*Screenshots will be added after deployment*

## 🛠️ Built With

### Frontend
- **React** (17.0.2) - JavaScript library for building user interfaces
- **React Router DOM** (5.2.0) - Declarative routing for React
- **Material-UI** (4.11.3) - React components implementing Google's Material Design
- **Styled Components** (5.2.1) - CSS-in-JS library for styling React components

### Backend & Database
- **Firebase** (8.3.1) - Backend-as-a-Service platform
- **Firestore** - NoSQL cloud database
- **Firebase Auth** - Authentication service
- **Firebase Hosting** - Web hosting service

### Development Tools
- **Create React App** (5.0.1) - React development environment
- **React Number Format** (4.5.1) - Number formatting component
- **Web Vitals** (1.0.1) - Performance monitoring

### Code Quality & Engineering
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Jest & React Testing Library** - Automated testing
- **GitHub Actions** - CI/CD pipeline
- **Environment Configuration** - Secure config management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git**

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/CleverProgrammers/react-challenge-march21-amazon-clone.git
cd react-challenge-march21-amazon-clone
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up Firebase (Optional - for your own instance)
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore Database
3. Copy your Firebase configuration
4. Replace the config in `src/firebase.js`

### 4. Start the development server
```bash
npm start
# or
yarn start
```

### 5. Open your browser
Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Home.js            # Homepage with products
│   ├── Product.js         # Individual product component
│   ├── Cart.js            # Shopping cart page
│   ├── CartItem.js        # Cart item component
│   ├── CartItems.js       # Cart items container
│   ├── CartTotal.js       # Cart total calculator
│   └── Login.js           # Authentication component
├── firebase.js            # Firebase configuration
├── App.js                 # Main application component
├── App.css                # Application styles
├── index.js               # React entry point
└── index.css              # Global styles
```

## 🔧 Available Scripts

### Development
- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner in watch mode
- **`npm run build`** - Builds the app for production
- **`npm run eject`** - Ejects from Create React App (one-way operation)

### Code Quality
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run lint:fix`** - Fix ESLint errors automatically
- **`npm run test:coverage`** - Run tests with coverage report
- **`npm run test:ci`** - Run tests in CI mode

### Deployment & Analysis
- **`npm run serve`** - Serve the built app locally
- **`npm run analyze`** - Analyze bundle size
- **`npm run deploy`** - Deploy to Firebase Hosting

## 🧪 Testing

This project includes comprehensive testing:

- **Unit Tests** - Component behavior and functionality
- **Integration Tests** - Component interactions
- **Coverage Reports** - Code coverage tracking
- **CI/CD Testing** - Automated testing on every commit

Run tests with coverage:
```bash
npm run test:coverage
```

## 🚀 Deployment

The application is deployed using Firebase Hosting. To deploy your own version:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase: `firebase init`
4. Build the project: `npm run build`
5. Deploy: `firebase deploy`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Clever Programmers** - [@CleverProgrammers](https://github.com/CleverProgrammers)

**Project Link:** [https://github.com/CleverProgrammers/react-challenge-march21-amazon-clone](https://github.com/CleverProgrammers/react-challenge-march21-amazon-clone)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Material-UI](https://material-ui.com/)
- [Create React App](https://create-react-app.dev/)
- [Clever Programmers Community](https://www.cleverprogrammer.com/)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/CleverProgrammers">Clever Programmers</a>
</div>