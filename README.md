# NextJS14 Starter Template

This is a starter template for Next.js 14. It includes the following additional packages and configurations:

- [DaisyUI](https://daisyui.com/) for additional Tailwind CSS components and dark mode support
- [Clerk Auth](https://clerk.com/) for authentication. Here is the full [documentation](https://clerk.com/docs/quickstarts/nextjs).

## Requirements

- You need to create an account on [Clerk](https://clerk.com/) and create a new project to get your API keys.
- You need to create a `.env.local` file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your_publishable_key;
CLERK_SECRET_KEY = your_secret_key;
```
