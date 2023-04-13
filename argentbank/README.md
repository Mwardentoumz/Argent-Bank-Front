# Argent Bank

Argent Bank[^1] is a bank service allowing customers to login on their website and to manage their bank accounts and their profile.

**Goal of this project**: API integration in a React app, use of Redux for global state management, and creation of future endpoints with Swagger.

## Load specifications

### Website designs

Static HTML and CSS were provided [here](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs).

![Design for the home page](./src/assets/design/homepage.png 'Design for the home page')

## Features

-  Users are able to navigate to the home page (`/`).
-  Users can go to the login page (`/login`), fill out credentials, login to the back-end API with JWT tokens for authentication, and then successfully navigate to their profile page (`/profile`).
-  Users can see their first name and the logout button in header when they're logged in. If they click on the logout button, they go back to the home page (`/`).
-  After succesfully logging in, users can see their profile page with their first and last names, and see placeholder bank account information.
-  Users can edit their profile (first and last names) if they're logged in, and data should be persisted to the API database.

### Technical constraints

-  Application creation with React (from static HTML and CSS).
-  Use of React Router.
-  Implementation of Redux to manage application global state (with actions to send information and fetch from API, reducer to handle application state changes, store to manage all data).
-  Creation of future API endpoints (with HTTP methods, routes, description, parameters, and types of responses) for future features with Swagger (in `swagger.yaml`):
   -  See all transactions for the current month.
   -  See transaction details in a new view.
   -  Add, remove or update informations on a given transaction.

## Prerequisites

-  [NodeJS](https://nodejs.org/en/) v12+
-  [MongoDB Community Server](https://www.mongodb.com/try/download/community)
-  [npm](https://www.npmjs.com/)
-  [Yarn](https://yarnpkg.com/)
-  [React](https://fr.reactjs.org/) v18.1.0
-  [React Router](https://reactrouter.com/) v6.3.0
-  [React Redux](https://react-redux.js.org/) v8.0.2
-  [Redux](https://redux.js.org/) v4.2.0
-  [Redux Persist](https://www.npmjs.com/package/redux-persist) v6.0.0
-  [Redux Toolkit](https://redux-toolkit.js.org/) v1.8.2
-  [PropTypes](https://www.npmjs.com/package/prop-types) v15.8.1
-  [StyledComponents](https://www.npmjs.com/package/styled-components) v5.3.5

## Installation and launch

### Back-end

#### Back-end repository

The back-end repository using NodeJS is available on [this link](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

1. Clone the repository

```sh
git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git
```

2. Install the dependencies

```sh
npm install
```

3. Start the local development server

```sh
npm run dev:server
```

4. Populate MongoDB database

```sh
npm run populate-db
```

Data can be seen in MongoDB Compass on `argentBankDB/users/` directory.

#### Populated users

There are now two users in the MongoDB database:

1. Tony Stark

-  First Name: `Tony`
-  Last Name: `Stark`
-  Email: `tony@stark.com`
-  Password: `password123`

2. Steve Rogers

-  First Name: `Steve`
-  Last Name: `Rogers`
-  Email: `steve@rogers.com`
-  Password: `password456`

Provided emails and passwords can be used to login to the ArgentBank application.

#### API documentation

Once the local environment is started, learn more about how the API works on <http://localhost:3001/api-docs>.

### Front-end

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/argentbank.git
```

2. Install the dependencies

```sh
npm install
```

3. Launch the project

```sh
npm start
```

It runs the app in the development mode, and opens [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload when changes are made in the code. Any lint errors can also be seen in the console.

[^1]: This is the 10th project of the "Front-end developer (JS - React)" training by OpenClassrooms.