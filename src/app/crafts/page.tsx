import Link from "next/link";

export default function Page() {
  return (
    <div className="p-12">
      <h1 className="mb-4 font-semibold text-lg">Crafts</h1>

      <Link
        href="/crafts/chatGPT-enterprise-carousel"
        className="text-sm underline transition hover:opacity-50"
      >
        ChatGPT Enterprise Carousel
      </Link>
    </div>
  );
}
