import styles from "./Register.module.css";
import RegisterForm from "@/components/RegisterForm";

const registerPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default registerPage;
