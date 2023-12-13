import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={`/login`}>
        Click me
      </Link>
      <Link href={`/cart`}>
        Open cart
      </Link>
      <button>
        Open Menu
      </button>
    </main>
  );
}
