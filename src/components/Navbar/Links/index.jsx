import NavLink from "./NavLink";
import styles from "./Links.module.css";

const Links = () => {
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
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title}/>
      ))}
    </div>
  );
};

export default Links;