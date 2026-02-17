# Copilot Instructions: Devcutz Portfolio

## Architecture Overview

This is a **Vite + React portfolio site** for a freelance web services company. Single-page application with no state management, composed of:
- **[src/App.jsx](src/App.jsx)**: Main component mounting six sequential page sections (Navbar → Home → Portfolio → Services → About → Contact)
- **[src/components/](src/components/)**: Functional components with `.jsx` files (navbar, home, portfolio, services, about, email)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin; custom colors like `#C08457` (brand accent) defined inline
- **External integration**: EmailJS for contact form via `@emailjs/browser`

## Development Workflows

**Start dev server**: `npm run dev` (Vite HMR enabled; React Compiler applies bytecode optimizations during build)

**Build for production**: `npm run build` → outputs to `dist/`

**Lint**: `npm run lint` (ESLint with React Hooks + React Refresh rules; unused vars ignored if uppercase/underscore-prefixed)

**Preview build**: `npm run preview`

## Key Patterns & Conventions

### Component Structure
- Functional components only; use `useRef`, `useState`, `useEffect` for state/refs
- Example: [src/components/email.jsx](src/components/email.jsx) uses `useRef` for form ref, `useState` for validation messages, `useEffect` for EmailJS init and message auto-clear timers

### Styling
- **Tailwind classes only**; no CSS modules or separate stylesheets in components
- Fixed navbar: `fixed top-0 left-0 w-full z-50`
- Responsive: `hidden md:flex` for mobile/desktop variants
- Brand colors: dark text `#1C1C1C`, accent `#C08457` in `hover:` states

### Environment Variables
- EmailJS public key accessed via `import.meta.env.VITE_PUBLIC_KEY`
- Must be prefixed with `VITE_` to be exposed to client code
- Check `.env` file in project root

### Form Handling (Contact Section)
- Uncontrolled form using refs; read data via `new FormData(form.current)`
- Validates before submission (name min 2 chars, valid email regex)
- Displays success/error messages; auto-clears after 5 seconds using timeout refs
- Loading state prevents double-submission

## Common Tasks

- **Add new component**: Create in [src/components/](src/components/), import in [App.jsx](src/App.jsx)
- **Update navbar links**: Edit [src/components/navbar.jsx](src/components/navbar.jsx) `<a href="#section">` anchors to match component IDs
- **Modify email form**: Update validation rules and EmailJS template name in [src/components/email.jsx](src/components/email.jsx)
- **Adjust colors**: Search codebase for hex codes (e.g., `#C08457`) and replace globally; keep consistent with brand palette

## Dependencies to Know

- **React 19.2** with React Compiler enabled (optimizes component rendering)
- **Tailwind CSS 4.1** with Vite integration; no PostCSS config needed
- **EmailJS 4.4**: Requires init with public key; uses template/service IDs in [email.jsx](src/components/email.jsx)
- **Vite 7.3**: Fast refresh on file changes; SWC-based JSX transform
