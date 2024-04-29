import Link from "next/link";

export default function Home() {
  return (
    <main>
      This is Home page.
      <ul>
        <li>
          <Link href="/account">My Account</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/confirm">Sign Up</Link>
        </li>
        <li>
          <Link href="/logins">Logins</Link>
        </li>
        <li>
          <Link href="/Registor">Registor</Link>
        </li>
      </ul>
    </main>
  );
}
