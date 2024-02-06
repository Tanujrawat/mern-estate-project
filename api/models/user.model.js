import mongoose, { Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // information about time the user created and the time user updated its account for better sorting 
);

const User = mongoose.model("User", UserSchema);
export default User;
