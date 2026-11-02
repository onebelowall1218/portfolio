import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 / PAGE NOT FOUND</span>
      <h1>
        Lost in the workflow<span>.</span>
      </h1>
      <p>
        This page does not exist, but the rest of the portfolio is a click away.
      </p>
      <Link className="button button-primary" href="/">
        Back home ↗
      </Link>
    </main>
  );
}
