import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const formatDate = (date) => {
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);

  return `${day}.${month}.${year}`;
}
