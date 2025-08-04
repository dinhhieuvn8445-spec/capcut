# Overview

This is a modern full-stack web application for HDT AI's CapCut course offering. The application is a Vietnamese-language educational platform that provides courses on video editing using CapCut, targeting content creators, small business owners, and aspiring video editors. The platform features course information, instructor profiles, pricing tiers, and a registration system for prospective students.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod schema validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for courses, instructors, and registration management
- **Development Server**: Custom Vite integration for seamless full-stack development experience
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database interactions and schema management
- **Database**: PostgreSQL with Neon serverless database for scalable cloud hosting
- **Schema**: Well-defined tables for courses, instructors, and registrations with proper relationships
- **In-Memory Storage**: Fallback memory storage implementation for development and testing
- **Migrations**: Drizzle Kit for database schema migrations and version control

## Development and Deployment
- **Monorepo Structure**: Organized codebase with shared schema types between frontend and backend
- **Path Aliases**: TypeScript path mapping for clean import statements and better code organization
- **Development Tools**: Hot module replacement, error overlay, and development banner integration
- **Build Process**: Separate build processes for client and server with optimized output

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive primitive components for building accessible interfaces
- **Tailwind CSS**: Utility-first CSS framework with custom color system and responsive design
- **Lucide React**: Consistent icon library for UI elements

### Data and Validation
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Modern date manipulation and formatting utilities

### Development Environment
- **Replit Integration**: Special plugins and configurations for Replit development environment
- **TypeScript**: Strict type checking with modern compiler options
- **ESLint**: Code quality and consistency enforcement

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting solution
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Crypto**: Node.js built-in module for UUID generation and security functions