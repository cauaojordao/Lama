"use client";
import NavLink from "./NavLink";
import styles from "./Links.module.css";
import { useState } from "react";

const Links = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //temp
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <nav className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </nav>
      <button className={styles.menuButton} onClick={() => setToggleSidebar((prev) => !prev)}>Menu</button>
      {toggleSidebar && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
