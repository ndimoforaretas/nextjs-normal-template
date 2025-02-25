# NextJS14 Starter Template

![NextJS Starter Demo](public/nextjs-template.gif)

This is a starter template for Next.js 14. It includes the following additional packages and configurations:

- [DaisyUI](https://daisyui.com/) for additional Tailwind CSS components and dark mode support
- [Clerk Auth](https://clerk.com/) for authentication. Here is the full [documentation](https://clerk.com/docs/quickstarts/nextjs).

## Requirements

- An account on [Clerk](https://clerk.com/) and with a new project to get your API keys.
- A `.env.local` file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your_publishable_key;
CLERK_SECRET_KEY = your_secret_key;
```

## Getting Started

- create a new project with this template by clicking on the `Use this template` button on the top right corner of this page.
- clone the project to your local machine.
- run `npm install` to install the dependencies.
- run `npm run dev` to start the development server.
- open [http://localhost:3000](http://localhost:3000) in your browser.
- start building your app!
