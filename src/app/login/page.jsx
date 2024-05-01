import { login, signup } from './actions'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <p>New user? Try to </p>
      <Link href='signup'>Sign up</Link>
    </form>
  )
}