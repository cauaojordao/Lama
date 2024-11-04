import Postcard from "@/components/Postcard";
import styles from "./Blog.module.css"

const BlogPage = () => {

    return (
        <main className={styles.container}>
            <Postcard />
            <Postcard />
            <Postcard />
            <Postcard />
        </main>
    )
}

export default BlogPage;