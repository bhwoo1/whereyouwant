import Search from "./components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100">
      <Image src="/whereyouwant_main.png" alt="main" width={500} height={500} />
      <Search />
    </div>
  );
}