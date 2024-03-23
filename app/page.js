import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl text-primary font-bold">NextJS Starter</h1>
          <p className="py-6 text-lg text-secondary">
            This is the Next.js starter with DaisyUI and Clerk Auth. There is a
            sample page which you can only access if you are logged in.🤗
          </p>
          <Link href="/content" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
