import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { UserButton, currentUser } from "@clerk/nextjs";

const links = [
  { href: "/content", label: "content" },
  { href: "/about", label: "about" },
];

const Navbar = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto justify-around flex-col sm:flex-row">
        <ThemeToggle />

        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize text-secondary">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <UserButton afterSignOutUrl="/" />
          <p className="ml-2 text-secondary">
            {user.firstName ? `Welcome, ${user.firstName}` : "Welcome"}
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
