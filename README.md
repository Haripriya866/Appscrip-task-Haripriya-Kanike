# Title
Appscrip Assignment – Product Listing Page (PLP)

## Objective
Build a pixel-perfect, mobile‑responsive Product Listing Page in React.js based on the given Figma design, demonstrating clean code structure, minimal dependencies, SEO best practices, and basic filtering/sorting functionality.

### Figma Design: 
https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design&node-id=0-1


## Demo

Link: 

## Tech Stack

- **React.js** (Create React App)
- **HTML5** semantic structure
- **Pure CSS** (Flexbox & CSS Grid + Media Queries)
- **JavaScript Fetch API** for data loading (Fake Store API)
- **react-helmet** for dynamic `<title>` and meta description

## Functionality

- **Pixel‑aligned layout** closely matching the PLP Figma design (header, hero, filters, product grid, footer).
- **Responsive layout**:
  - Desktop: sidebar filters + 3‑column product grid.
  - Tablet: filters stacked above a 2‑column grid.
  - Mobile: single‑column grid with simplified navigation.
- **Category Filtering**:
  - Multi‑select checkboxes for categories (e.g., men’s clothing, women’s clothing, jewellery, electronics).
  - Supports combining multiple categories (e.g., women’s clothing + electronics).
- **Price Sorting**:
  - Recommended (default)
  - Price: Low to High
  - Price: High to Low
  - Sorting works together with active filters.
- **Dynamic Data**:
  - Products loaded from Fake Store API (`https://fakestoreapi.com/products`).
- **SEO Enhancements**:
  - HTML `<title>` and meta description.
  - Main content structured with `<h1>` (hero) and `<h2>` (product list).
  - JSON‑LD `ItemList` schema injected for product listing.
  - Descriptive, SEO‑friendly image names and `alt` attributes.
- **Code Quality**:
  - Component‑based structure (`Header`, `Filters`, `ProductCard`, `Footer`).
  - Minimal third‑party packages (only React + optional react‑helmet).
  - Clean, readable CSS with limited nesting to keep DOM size small.

## Setup Instructions

1. Initialize Project:
    * create a folder: mkdir appscrip-task-yourname
    * navigate to the main folder: cd appscrip-task-yourname
    * Initialize a React app: Run npx create-react-app . (the dot uses the current folder).

2. Install Dependencies:
    * npm install react-helmet

3. Steps to run locally (npm install, npm start).
   
   
## push the code to Git using the following commands
* git init
* git remote add origin https://github.com/Haripriya866/Appscrip-task-Haripriya-Kanike.git
* git add -A
* git commit -m "initial commit"
* git branch -M main
* git push -u origin main

## Deployment
Choose a Platform: Select a deployment platform like Vercel or netlify