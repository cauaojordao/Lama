import Image from "next/image";
import styles from "./Postcard.module.css";
import Link from "next/link";

const Postcard = () => {
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <figure className={styles.imgContainer}>
          <Image
            src="/postcard.png"
            alt="postcard"
            fill
            className={styles.img}
          />
        </figure>
        <span className={styles.date}>01.01.2024</span>
      </section>
      <section className={styles.bottom}>
        <h2 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quidem alias, eligendi dolorem libero accusamus perspiciatis
          cupiditate sunt enim asperiores! Molestias distinctio quo delectus
          quibusdam exercitationem necessitatibus incidunt expedita et!
        </p>
        <Link href="blog/post">READ MORE</Link>
      </section>
    </div>
  );
};

export default Postcard;
