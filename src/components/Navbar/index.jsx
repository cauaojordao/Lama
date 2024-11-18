import Links from "@/components/Navbar/Links";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {

  const session = await auth()
  return (
    <header className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>Lama</h1>
      </Link>
      <nav>
        <Links session={session}/>
      </nav>
    </header>
  );
};

export default Navbar;
