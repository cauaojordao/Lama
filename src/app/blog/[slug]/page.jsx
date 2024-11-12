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


const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  
  // const post = await getData(slug);
      const post = await getPost(slug);
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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/19117289/pexels-photo-19117289/free-photo-of-rua-via-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
