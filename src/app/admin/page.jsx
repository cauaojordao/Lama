import styles from "./Admin.module.css";

import AdminUsers from "../../components/AdminUsers";
import AdminPosts from "../../components/AdminPosts";
import AdminPostForm from "../../components/AdminPostForm";
import AdminUserForm from "../../components/AdminUserForm";
import { Suspense } from "react";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
