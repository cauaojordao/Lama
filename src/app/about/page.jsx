import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create Digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quidem alias, eligendi dolorem libero accusamus perspiciatis.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10</h1>
            <h3>Years Of Experience</h3>
          </div>
          <div className={styles.box}>
            <h1>100</h1>
            <h3>Projects Completed</h3>
          </div>
          <div className={styles.box}>
            <h1>50</h1>
            <h3>Happy Clients</h3>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
