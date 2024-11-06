import Image from "next/image";
import styles from "./Postcard.module.css";
import Link from "next/link";

const Postcard = ({ post }) => {
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <figure className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19117289/pexels-photo-19117289/free-photo-of-rua-via-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="postcard"
            fill
            className={styles.img}
          />
        </figure>
        <span className={styles.date}>01.01.2024</span>
      </section>
      <section className={styles.bottom}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          Read More
        </Link>
      </section>
    </div>
  );
};

export default Postcard;
