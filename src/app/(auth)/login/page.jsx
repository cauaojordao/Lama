import LoginForm from "@/components/LoginForm";
import styles from "../register/Register.module.css";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <LoginForm />
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
