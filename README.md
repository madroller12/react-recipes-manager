# 🍳 React Recipes Manager
A modern Single Page Application (SPA) built with React and TypeScript
for managing and organizing cooking recipes. This project demonstrates
core frontend development principles, including global state
management, routing, and strict typing.
## 🚀 Tech Stack
* **Core:** React, TypeScript
* **Build Tool:** Vite
* **Routing:** React Router DOM
* **State Management:** React Context API + Hooks (`useState`,
`useEffect`, `useContext`)
* **Styling:** Custom CSS with CSS Variables for theming
## ✨ Key Features
* **Global State Management:** Uses Context API to manage the recipes
list, loading states, and error handling without prop drilling.
* **Simulated Async Operations:** Implements `Promise`-based mock
fetches to simulate real-world API requests, complete with loading
spinners and error fallbacks.
* **Type Safety:** Built strictly with TypeScript interfaces (no
`any`), ensuring predictable data models for `Recipe` objects.
* **Client-Side Routing:** Multi-page navigation (List, Details, Add
Recipe) handled seamlessly by React Router.
* **Controlled Forms:** Secure and validated inputs for adding new
recipes to the global state.
* **Dynamic Interactions:** Features like toggling vegetarian status
directly from the UI.
## ️ Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com/madroller12/react-recipes-app.git
```
2. Navigate to the project directory:
```bash
cd react-recipes-app
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash

npm run dev
```
## 🧠 What I Learned
This project was a great opportunity to solidify my understanding of
building scalable React applications. Managing the asynchronous data
flow natively with `useEffect` and `Context`, combined with the strict
typing of TypeScript, proved how essential a strong architectural
foundation is before even connecting a real backend.
