import Link from "next/link";
import Button from "../components/button";
export default function Header({ theme, setTheme }) {
  return (
    <header id="header" className={theme}>
      <nav>
        <ul id="navbar-ul">
          <li>
            <Link href="/" className="home-tag">
              Home
            </Link>
          </li>
          <li>
            <Button theme={theme} setTheme={setTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
