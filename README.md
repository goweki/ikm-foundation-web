# IKM Foundation Website

The official website for **IKM Foundation**, built with Next.js, React, and Tailwind CSS v4.

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Lucide React
- Framer Motion
- Sass
- React Slick
- React Player

## Requirements

- Node.js 24
- npm

## Development

```bash
npm ci
npm run dev
```

The development server runs at http://localhost:3000.

## Production

Build and start the standalone application:

```
npm run build
npm run start
```

The build automatically copies:

- `public/` → `.next/standalone/public/`
- `.next/static/` → `.next/standalone/.next/static/`

This makes `.next/standalone/` ready for deployment.

## Deployment

The application is deployed to cPanel using GitHub Actions and FTP.

Deployment is triggered automatically when changes are pushed to the `main` branch.

The workflow:

- Checks out the repository.
- Installs Node.js 24.
- Runs `npm ci`.
- Builds the Next.js application.
- Copies static assets into the standalone build.
- Uploads `.next/standalone/` to cPanel via FTP.
- GitHub Secrets

### Configure these repository secrets:

- FTP_HOST
- FTP_USERNAME
- FTP_PASSWORD

The cPanel server must run the Next.js standalone application using server.js.

## Project Structure

```
├── app/                 # Next.js application routes
├── components/          # Reusable UI components
├── public/              # Static assets
├── styles/              # Global styles / Sass
├── .github/workflows/   # GitHub Actions
├── next.config.*        # Next.js configuration
├── postcss.config.*     # Tailwind/PostCSS configuration
├── tsconfig.json
└── package.json
```

## UI Components

The project is migrating from Headless UI to shadcn/ui.

For new UI work, prefer:

- shadcn/ui
- Radix UI primitives
- Tailwind CSS
- class-variance-authority
  -lucide-react

Avoid adding new UI dependencies when an existing shadcn/Radix component can solve the requirement.

Existing Headless UI components can be migrated incrementally rather than all at once.

## Tailwind CSS

The project uses Tailwind CSS v4.

Keep the design system centralized using CSS variables and semantic theme tokens rather than hard-coding colours throughout components.

Prefer semantic tokens such as:

- background
- foreground
- primary
- secondary
- muted
- accent
- destructive
- border

This makes the colour system easier to maintain and change globally.

## Development Guidelines

Prefer:

- TypeScript
- Server Components by default
- Client Components only when required
- Reusable components
- shadcn/ui for new UI
- Semantic HTML
- Accessible interactive elements
- Centralized theme variables
- Optimized images and assets

Before committing changes, verify that the production build succeeds:

```
npm run build
```

## License

Private project for IKM Foundation.
