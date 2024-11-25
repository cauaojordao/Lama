"use client";
import styles from "./AdminPostForm.module.css";
import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {

    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form action={formAction} className={styles.container}>
            <h1>Add new Post</h1>


            <input type="text" placeholder="title" name="title" />
            <input type="text" placeholder="slug" name="slug" />
            <input type="text" placeholder="image" name="img" />
            <input type="hidden" value={userId} name="userId" />
            <textarea type="text" placeholder="desc" name="desc" rows={10}/>
            <button>Create</button>
            {state && state.error}
        </form>
    );
};

export default AdminPostForm;