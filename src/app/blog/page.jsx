import Postcard from "@/components/Postcard";
import styles from "./Blog.module.css";

export const metadata = {
  title: "Blogs",
  description: "Blog Page Description",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  console.log(posts);
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
