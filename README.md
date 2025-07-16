# Portfolio Website

A modern portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Modern React with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Shadcn/ui components
- React Router for navigation
- Responsive design

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment to GitHub Pages with proper SPA routing support.

### GitHub Pages SPA Routing

The project includes a post-build script that automatically copies `index.html` to `404.html` in the build output. This enables client-side routing to work correctly on GitHub Pages:

- When users visit `/portfolio` or `/blog` directly, GitHub Pages serves `404.html`
- The `404.html` file contains the same content as `index.html`
- React Router takes over and displays the correct page content

### Build Process

The build process automatically:
1. Builds the project with Vite
2. Copies `dist/index.html` to `dist/404.html`
3. Deploys to GitHub Pages via GitHub Actions

### Manual Deployment

If deploying manually, ensure you run:
```bash
npm run build
```

This will automatically create the `404.html` file needed for SPA routing.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── App.tsx        # Main app component
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- React Router DOM
- React Query
