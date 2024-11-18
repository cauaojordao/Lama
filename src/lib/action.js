"use server";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidadePath } from "next/cache";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  "use server";
  const { title, desc, slug, img, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, img, userId });
    await newPost.save();
    revalidadePath("/blog");
  } catch (err) {
    return { error: "Failed to connect to db" };
  }
};

export const deletePost = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidadePath("/blog");
  } catch (err) {
    return { error: "Failed to connect to db" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (prevState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img: img || "/noavatar.png",
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
