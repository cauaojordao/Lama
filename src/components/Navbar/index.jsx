import Links from "@/components/Navbar/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <span className={styles.logo}>Lama</span>
      <nav>
        <Links />
      </nav>
    </header>
  );
};

export default Navbar;
