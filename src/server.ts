import mongoose, { connect } from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://cowhut-admin:zLhhPiO7kfac0b7j@cluster0.0qzxy5d.mongodb.net/"
    );
    console.log("database connected successfully");
    app.listen(5000, () => {
      console.log("Application running on port 5000");
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }
}
main();
