import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex justify-between p-3 mb-3 border-b-2">
      <div>
        <Link href={'/'}>MB</Link>
      </div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <a href="https://maurobrandan.com/" target="_blank" rel="noopener noreerrer">Sobre mi</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
