import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { username, email, password, avatar } = await request.json();
    if (!username || !email || !password) {
      return Response.json(
        {
          success: false,
          message: "all field are empty",
        },
        { status: 400 }
      );
    }

    const existUser = await userModel.findOne({ email });
    if (!existUser) {
      return Response.json(
        { success: false, message: "user already exist" },
        { status: 400 }
      );
    }

    //   if(avatar){}

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return Response.json(
        {
          success: false,
          message: "password hashing failed",
        },
        { status: 401 }
      );
    }

    const newUser = {
      username,
      email,
      password: hashedPassword,
      avatar: avatar || "",
    };
    const user = await userModel.create(newUser);

    return Response.json(
      { success: true, message: "user registered successully", user },
      { status: 201 }
    );
  } catch (error) {
    console.log("user registring error", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
