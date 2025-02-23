<<<<<<< HEAD
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"], // ✅ Prevents null values
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
=======
import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        emails : {
            type:String,
            required : true,
            unique: true
        },
        fullName : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true,
            minlength : 6,
        },
        profilePic : {
            type : String,
            default : "",
        },

    },{timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;
>>>>>>> 108db9fb6070fdfbcdcff7aa7def3a218930971f
