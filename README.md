# Task-Buddy

A Vue 3 Single Page Application (SPA) for managing tasks. Built for INSY 8413: Web Technologies & Modern Frontend Architectures.

## Tech Stack

- **Vue 3** (Composition API)
- **Vite** – Build tool
- **Pinia** – State management
- **Vue Router** – Client-side routing
- **Tailwind CSS** – Utility-first styling

## Features

- ✅ Add, delete, and toggle tasks
- ✅ Filter: All / To Do / Completed
- ✅ Clear completed tasks (Exercise A)
- ✅ Stats dashboard
- ✅ User profile with editable bio (Exercise B)
- ✅ 404 page (Exercise C)
- ✅ Dark mode toggle
- ✅ Auth guard on protected routes
- ✅ Tasks persisted in localStorage

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/         # CSS, images
├── components/     # Reusable UI (TaskCard, AddTaskForm, AppLayout)
├── router/         # Vue Router config + guards
├── stores/         # Pinia stores (tasks, auth, theme)
├── views/          # Page components (Dashboard, Stats, Profile, Login, NotFound)
├── App.vue
└── main.js
```

## Default Login

For demo purposes, enter any email and name on the login page to access the app.
