import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        className="h-8 w-8 "
        width={100}
        height={100}
        src={"/logo.png"}
        alt="logo"
      />
      <h3 className="text-xl font-semibold">Task Manager</h3>
    </Link>
  );
};

export default Logo;
