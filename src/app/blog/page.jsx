import Postcard from "@/components/Postcard";
import styles from "./Blog.module.css";

const BlogPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
    </main>
  );
};

export default BlogPage;
