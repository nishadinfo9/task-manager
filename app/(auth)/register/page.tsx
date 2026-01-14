import React from "react";
import RegisterForm from "@/components/AuthForm/RegisterForm";
import Link from "next/link";

const Register = () => {
  return (
    <div className="border rounded-lg mt-20 py-5 w-md mx-auto">
      <h2 className="text-center font-bold text-3xl">Register</h2>

      <RegisterForm />
      <div className="flex text-sm gap-1 mt-3 items-center justify-center">
        <p>Already have an account</p>
        <Link href={"/login"} className="text-blue-700">
          login
        </Link>
      </div>
    </div>
  );
};

export default Register;
