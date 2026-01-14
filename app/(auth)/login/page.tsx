import LoginForm from "@/components/AuthForm/LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="border rounded-lg mt-20 py-5 w-md mx-auto">
      <h2 className="text-center font-bold text-3xl">Login</h2>
      <LoginForm />
      <div className="flex text-sm gap-1 mt-3 items-center justify-center">
        <p>Dont&apos;n have an account</p>
        <Link href={"/register"} className="text-blue-700">
          register
        </Link>
      </div>
    </div>
  );
};

export default Login;
