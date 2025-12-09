import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className={"title"}>Hey, I'm Arda</h1>
      <p className={"text"}>Based in Istanbul. Building software for humans.</p>
      <div className={"links"}>
        <Link target={"_blank"} href="mailto:ardasarico@gmail.com">
          Email
        </Link>
        <Link target={"_blank"} href="https://x.com/ardasarico">
          Twitter
        </Link>
        <Link target={"_blank"} href="https://github.com/ardasarico">
          GitHub
        </Link>
      </div>
    </main>
  );
}
