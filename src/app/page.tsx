import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12">
      <Link href="/crafts" className=" underline transition hover:opacity-75">
        Crafts
      </Link>
    </main>
  );
}
