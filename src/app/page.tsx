import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1>Hello World</h1>
        <Link href="/auth/login">
          <button className="bg-white px-4 py-1 text-gray-800 rounded-md cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
