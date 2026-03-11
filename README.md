# Frontend Assignment Test

This repository contains a small frontend assignment built with **Next.js 16 (App Router)** and **TypeScript**. It demonstrates simple state management, component composition, and data transformation while calling a public API.

## Project Features

- **Todo List**:  A main list with items that can be moved into either the **Fruit** or **Vegetable** columns by clicking. Items automatically return to the main list after 5 seconds.
- **User Data Page**: Fetches users from `https://dummyjson.com/users`, groups them by department, and displays aggregated statistics (gender counts, age range, hair color breakdown, etc.).
- **Reusable Components**: `TodoGroup` component used for categorizing items with custom styling.
- **TypeScript Models**: Shared `constants/data.ts` defines interfaces and initial data used across the app.
- **Minimal Styling**: Utilizes Tailwind CSS for quick layout and responsive design.

## Getting Started 

### Prerequisites

- Node.js 18+ (bundled with the appropriate package manager: npm, yarn, pnpm, or bun)
- Git (for cloning the repo)

### Installation

```bash
# clone repository
git clone https://github.com/your-org/fe-assignment-test.git
cd fe-assignment-test

# install dependencies (pick one)
npm install
# or
# yarn install
# or
# pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes in `src/app` will hot-reload automatically.

### Build & Production

```bash
npm run build
npm run start
```

> The site is ready to deploy on any platform that supports Next.js (Vercel, Netlify, etc.).

## Project Structure

```
├─ public/                # static assets
├─ src/app/               # Next.js app router
│  ├─ page.tsx            # main todo page
│  ├─ users/page.tsx      # user data transformation page
│  └─ …
├─ src/components/        # reusable React components
│  └─ todo/TodoGroup.tsx
├─ src/constants/data.ts  # types and initial data
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md              # you are here
```

## Usage

- Navigate to `/` to interact with the todo list. Click items to move them.
- Go to `/users` to trigger the API call and view grouped user statistics.

## Notes & Tips

- The todo items automatically return to the main column after 5 seconds; timers are cleaned up on unmount.
- Feel free to extend the data transformation logic or add filtering/sorting.

## Learn More

This project builds on the default Next.js starter. For additional guidance:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
