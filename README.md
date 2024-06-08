# Meal Finder Project

Recipe Finder is a web application designed to help users discover recipes. The main features include a "Meal of the Day" section that showcases a random recipe, and a search function that allows users to find recipes by name. Each recipe comes with detailed information, including ingredients and preparation instructions.

## Table of Contents

- Features
- Technologies Used
- Installation
- Usage

### Features

Main Page

- Header: Displays a logo centered in the header. Clicking the logo navigates to the main page.
- Meal of the Day Section: Displays a randomly selected recipe with its name, category, country, tags and image. Clicking this section navigates to the recipe's detail page.
- Search Section: Contains a search bar for users to input a recipe name. Upon clicking the "Search" button or pressing Enter, the app fetches recipes matching the search query and displays them in a single row.

Recipe Detail Page

- Recipe Details: Shows detailed information about a recipe including the name, image, category, country, ingredients with measurements, instructions, and other relevant data.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- create-react-app: A tool to set up a modern web app by running one command.
- react-dom: Provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements.
- react-router-dom: A collection of navigational components that compose declaratively with your application.
- react-hooks: Functions that let you use state and other React features without writing a class.
- axios: A promise-based HTTP client for the browser and Node.js, used to fetch data from APIs.

### Installation

To set up the project locally, follow these steps:

1. Clone the repository

- git clone https://github.com/your-username/the-meal.git
- cd the-meal

2. Install dependencies

- npm install

3. Start the development server

- npm start

The application will be available at http://localhost:3000.

### Usage

1. Home Page: Navigate to the home page to see the "Meal of the Day" and search for recipes.
2. Meal of the Day: Click on the "Meal of the Day" section to view the detailed recipe.
3. Search Recipes: Use the search bar to find recipes by name. Click on any search result to view the detailed recipe.
