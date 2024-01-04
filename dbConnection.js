const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pu_rush_78:pu__rush__78@cluster0.zesgfmf.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
