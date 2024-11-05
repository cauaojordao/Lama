import Image from "next/image";
import styles from "./SinglePost.module.css";
const SinglePostPage = () => {
  return (
    <main className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19117289/pexels-photo-19117289/free-photo-of-rua-via-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </figure>
      <section className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/19117289/pexels-photo-19117289/free-photo-of-rua-via-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              libero quibusdam qui laborum. Tempora veritatis alias aliquam sit
              aut incidunt? Veniam nostrum exercitationem eos doloribus. Magni
              corporis quia cumque saepe?
            </p>
          </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
