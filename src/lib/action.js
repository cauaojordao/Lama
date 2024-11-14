"use server";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { revalidadePath } from "next/cache";

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
