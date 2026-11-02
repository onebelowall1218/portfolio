import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Anjum Ulazim, home">
          AU<span className="wordmark-dot">.</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About</Link>
          <Link className="nav-contact" href="/#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
