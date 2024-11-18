"use client";
import NavLink from "./NavLink";
import styles from "./Links.module.css";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const Links = ({session}) => {
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
  return (
    <div className={styles.container}>
      <nav className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>

            <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </nav>
      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setToggleSidebar((prev) => !prev)}
      />
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
