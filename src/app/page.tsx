import Search from "./components/Search";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100">
      <p className="text-3xl font-bold mb-4">어디갈래?</p>
      <Search />
    </div>
  );
}