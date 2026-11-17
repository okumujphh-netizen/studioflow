# Studiofolio – Personal Portfolio Platform

Studiofolio is a responsive, React-powered portfolio platform that allows users to showcase, manage and organize their creative and development projects in one place.

The application provides a clean interface for displaying projects, searching through a portfolio, filtering by category and dynamically adding or deleting projects.

## Features

- **Project Showcase:** Display projects in an organized, responsive grid.
- **Add Projects:** Add new projects through an interactive form.
- **Search Projects:** Search projects dynamically by relevant information.
- **Category Filtering:** Filter projects according to their categories.
- **Project Details:** View additional information about individual projects.
- **Delete Projects:** Remove projects from the portfolio.
- **Local Storage:** Persist project data in the browser so projects remain available after refreshing.
- **Responsive Design:** Adapt the interface to desktop, tablet and mobile screens.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable user interface components |
| JavaScript (ES6+) | Application logic and interactivity |
| Vite | Development server and build tool |
| CSS3 | Styling and responsive layouts |
| Lucide React | Interface icons |
| React Hooks | Managing application state and side effects |
| Local Storage | Persisting project data |
| Vitest | Automated testing |
| React Testing Library | Testing React components |
| ESLint | Code quality and consistency |

## Project Structure

```text
studiofolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js
│   ├── styles/
│   │   └── App.css
│   ├── test/
│   │   └── setup.js
│   ├── __tests__/
│   │   └── ProjectCard.test.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/okumujphh-netizen/studioflow.git
```

### 2. Navigate into the project

```bash
cd studioflow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run automated tests |

## Testing

Studiofolio uses Vitest and React Testing Library for automated component testing.

Run:

```bash
npm test
```

Tests can verify component rendering, user interactions and application functionality.

## Data Persistence

Project information is stored using the browser's Local Storage API. This allows projects added by users to persist across browser refreshes without requiring a backend server.

## Learning Objectives

This project demonstrates practical understanding of:

- React component architecture.
- Props and component reusability.
- State management using `useState`.
- Side effects using `useEffect`.
- Controlled form inputs.
- Event handling.
- Dynamic rendering and filtering.
- Browser Local Storage.
- Component testing.

## Future Improvements

- User authentication and individual portfolios.
- Backend database integration.
- Project image uploads.
- Portfolio sharing through public links.
- Project editing functionality.
- Deployment to a production hosting platform.

## Author

**John Okumu**

GitHub: [okumujphh-netizen](https://github.com/okumujphh-netizen)

## License

This project was developed as part of a learning assignment at Moringa School.