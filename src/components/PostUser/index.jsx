import styles from "./PostUser.module.css"

const PostUser = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>Terry Jefferson</span>
        </div>
    )
}

export default PostUser