import styles from "./Home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quidem alias, eligendi dolorem libero accusamus perspiciatis
          cupiditate sunt enim asperiores! Molestias distinctio quo delectus
          quibusdam exercitationem necessitatibus incidunt expedita et!
        </p>

        <section className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </section>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImage} />
        </div>
      </section>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </main>
  );
};

export default Home;
