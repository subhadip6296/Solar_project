import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://gwinfrasol:aeP6ltoRYkJ3hM9F@cluster0.pqg9y.mongodb.net/gw-infra').then(() => console.log("DB Connected"))
}