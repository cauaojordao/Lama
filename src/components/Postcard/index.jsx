import Image from "next/image";
import styles from "./Postcard.module.css";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const Postcard = ({ post }) => {
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <figure className={styles.imgContainer}>
          <Image
            src={post.img}
            alt="postcard"
            fill
            className={styles.img}
          />
        </figure>
        <span className={styles.date}>{formatDate(post.createdAt)}</span>
      </section>
      <section className={styles.bottom}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </section>
    </div>
  );
};

export default Postcard;
