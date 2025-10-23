# Portfolio Website

## Overview

This is a modern, professional portfolio website built as a full-stack application. The project showcases software engineering work through a clean, technical aesthetic inspired by companies like Linear, Vercel, and GitHub. The application features a single-page design with smooth scrolling navigation, dark/light theme support, and a responsive layout that works across all device sizes.

The portfolio includes sections for a hero introduction, about information, featured projects, technology stack display, and a contact form. The design emphasizes clarity over decoration with a content-first hierarchy and technical sophistication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (instead of React Router)
- **Single Page Application (SPA)** architecture with smooth scroll navigation between sections

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives, configured with the "new-york" style variant
- Components are fully customizable and located in `client/src/components/ui/`
- **Tailwind CSS** for utility-first styling with custom design tokens
- Theme system supporting light and dark modes with CSS custom properties
- Typography uses Inter for body text and JetBrains Mono for code/tech labels

**State Management**
- **TanStack Query (React Query)** v5 for server state management and data fetching
- Local component state using React hooks
- Theme persistence using localStorage

**Styling Approach**
- Tailwind CSS with custom configuration extending the default theme
- CSS custom properties for dynamic theming (light/dark mode)
- Design system with consistent spacing units (4, 6, 8, 12, 16, 20, 24, 32)
- Custom color palette defined in CSS variables for both light and dark modes
- Hover and active states using custom elevation utilities (`hover-elevate`, `active-elevate-2`)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ESM modules
- Middleware stack includes JSON body parsing with raw body preservation for webhook support
- Custom request logging middleware for API routes with performance timing

**Development vs Production**
- Development mode integrates Vite middleware for HMR
- Production mode serves static files from `dist/public`
- Conditional Replit-specific plugins loaded only in development environments

**API Design**
- RESTful API structure with routes prefixed under `/api`
- Modular route registration system through `registerRoutes()` function
- Storage abstraction layer with interface-based design for flexibility

### Data Storage Solutions

**Storage Interface Pattern**
- Abstract `IStorage` interface defining CRUD operations
- **In-Memory Storage** (`MemStorage`) implementation for development/testing
- Designed to be swappable with database implementations (PostgreSQL via Drizzle ORM)

**Database Schema (Prepared for PostgreSQL)**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- User table defined with UUID primary keys, username/password fields
- Zod validation schemas generated from Drizzle schemas for runtime type safety
- Migration system configured to output to `./migrations` directory

**Session Management**
- `connect-pg-simple` for PostgreSQL-backed session storage (when database is connected)
- Designed for authentication workflows though not currently implemented

### External Dependencies

**UI Libraries & Components**
- **Radix UI** primitives for accessible, unstyled component foundation (accordion, dialog, dropdown, tooltip, etc.)
- **Lucide React** for consistent icon system
- **React Icons** specifically for tech stack logos (Simple Icons set)
- **embla-carousel-react** for carousel/slider functionality
- **cmdk** for command palette interfaces
- **date-fns** for date manipulation

**Form Handling**
- **React Hook Form** with **@hookform/resolvers** for form state management
- **Zod** integration for schema validation via drizzle-zod

**Database & ORM**
- **@neondatabase/serverless** for PostgreSQL connections optimized for serverless
- **Drizzle ORM** for type-safe database queries and migrations
- **drizzle-kit** for schema management and migration generation

**Development Tools**
- **Replit-specific plugins** for enhanced development experience (cartographer, dev banner, runtime error overlay)
- **TypeScript** with strict mode for type safety across the stack
- **esbuild** for fast server-side bundling in production

**Build & Deployment**
- Vite handles client-side bundling with React plugin
- esbuild bundles the Express server for production
- Path aliases configured (`@/`, `@shared/`, `@assets/`) for clean imports
- Asset resolution through Vite for images and static files

### Design System Implementation

**Color Palette Strategy**
- Separate color definitions for light and dark modes using HSL values
- Primary color (deep navy) for professional trust
- Accent color (vibrant blue) for CTAs and interactive elements
- Semantic color tokens (background, foreground, muted, destructive, etc.)
- Border opacity customization through CSS variables

**Layout System**
- Container max-width of 6xl (1280px) with responsive horizontal padding
- Consistent vertical rhythm using py-16 md:py-24 for sections
- Grid layouts with gap-6 md:gap-8 for project cards
- Mobile-first responsive breakpoints through Tailwind

**Component Patterns**
- Card-based layouts with subtle shadows and borders
- Badge components for tech stack labels
- Button variants (default, outline, secondary, ghost, destructive)
- Consistent sizing system (sm, default, lg, icon)
- Toast notifications for user feedback