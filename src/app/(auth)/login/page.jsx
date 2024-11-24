import LoginForm from "@/components/LoginForm";
import styles from "../register/Register.module.css";
import { handleGithubLogin } from "@/lib/action";
import { FaGithub } from "react-icons/fa";

const LoginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            Login With Github
            <FaGithub className={styles.icon} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
