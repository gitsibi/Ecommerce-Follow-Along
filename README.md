# Ecommerce Follow Along Project
Welcome to **Ecommerce Folow Along Project**, This is a hand-on project where we are going to build a completed e-coomerece application using the MERN Stack(Mongodb,express.js,react.js and node.js).In this we will learn how to develop a full stack web applications step by step. 

## Milestone 1: Project Overview

#### 1. Understanding the MERN Stack:
 **MongoDB :** A database for storing application data in a flexible, document based format.
 **Express.js :** A backend web application framework for building APIs and handling server logics.
 **React.js :** A framework library for building User Interfaces.
 **Node.js :** A runtime environment that allows javascript to run on the server.
 
#### 2. REST API Structure  
REST APIs are used to allow communication between the frontend and backend.  
We’ll create APIs for:  
- **User Authentication**: Allowing users to register and log in.  
- **Product Management**: Adding, updating, and retrieving product data.  
- **Order Handling**: Managing customer orders.

#### 3. Database Schema Design  
We’ll learn how to design and organize data using MongoDB. A schema helps us define how the data is stored and related.  


#### 4. Authentication  
Authentication ensures only the right people can access certain features. For example:  
- Users need to log in to place orders or see their personal data.  
- It keeps the app secure by verifying users’ identities.  

 


## Milestone 2: Project Setup and Login Page.

## Overview
In this milestone, I successfully set up both the frontend and backend of the project. The objective was to create a robust structure for the application that includes a login page on the frontend and establish a backend setup for handling requests. 

### Frontend Setup:
1. **Vite**: Used Vite as the build tool for the frontend, as it provides fast development and efficient bundling.
2. **Tailwind CSS**: Integrated Tailwind CSS for styling. The utility-first approach allows for rapid styling and better maintainability.
3. **Login Page**: Created a login page that allows users to input credentials, with basic form validation. The page is styled using Tailwind's pre-defined utility classes to ensure a responsive and modern design.

### Backend Setup:
1. **Express**: Set up an Express server to handle HTTP requests, with routing configured for the login functionality.
2. **MongoDB (via Mongoose)**: Integrated MongoDB as the database for storing user information. Used Mongoose to interact with the database in an organized way.
3. **dotenv**: Installed and configured the `dotenv` package to manage environment variables securely for sensitive information like database connection strings and JWT secret keys.

## Achievements:
- **Frontend**: Completed a basic yet functional login page using React and Tailwind CSS.
- **Backend**: Configured the backend with Express, Mongoose, and dotenv to handle API requests and manage environment configurations.
- **User Authentication**: Set up the basic structure for future user authentication endpoints (e.g., login and registration).


# Ecommerce Follow Along Project

## Milestone 3: Project Setup for Backend

In this milestone, I have successfully set up the backend of the ecommerce application using Node.js, Express, and MongoDB. The following tasks were accomplished:

1. **Backend Folder Structure**: Organized the backend code into controllers, models, routes, middleware, and utils folders.
2. **Server Setup**: Configured an Express server to listen on port 5000 and handle API requests.
3. **MongoDB Integration**: Connected the server to MongoDB using Mongoose to store and manage item data.
4. **Error Handling**: Implemented basic error handling to catch errors and provide meaningful messages.

The Backend is now capable of performing basic CRUD operations on items.



