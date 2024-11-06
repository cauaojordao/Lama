import Postcard from "@/components/Postcard";
import styles from "./Blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json()
}

const BlogPage = async () => {

  const posts = await getData()

  return (
    <main className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Postcard post={post} />
        </div>
      ))}
    </main>
  );
};

export default BlogPage;
