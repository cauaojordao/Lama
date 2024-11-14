import Postcard from "@/components/Postcard";
import styles from "./Blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blogs",
  description: "Blog Page Description",
};

const BlogPage = async () => {

  const posts = await getPosts();
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
