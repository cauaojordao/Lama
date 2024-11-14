import Image from "next/image";
import styles from "./SinglePost.module.css";
import PostUser from "@/components/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

/* DATA FETCHING WITH API

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}; */

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;

  // const post = await getData(slug);

  const post = await getPost(slug);

  return (
    <main className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image src={post.img} alt="" fill className={styles.img} />
      </figure>
      <section className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
        </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
