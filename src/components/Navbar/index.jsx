import Links from "@/components/Navbar/Links";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>Lama</h1>
      </Link>
      <nav>
        <Links />
      </nav>
    </header>
  );
};

export default Navbar;
