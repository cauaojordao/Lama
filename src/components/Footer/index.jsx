import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <span className={styles.logo}>lamadev</span>
            <span className={styles.text}>Lama creative thoughts agency © All rights reserved.</span>
        </div>
    )
}

export default Footer;