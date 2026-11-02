import Link from "next/link";
import { person } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="footer-name" href="/">
            Anjum Ulazim<span>.</span>
          </Link>
          <p>AI engineer building systems that hold up in production.</p>
        </div>
        <div className="footer-links">
          <a href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={person.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={`mailto:${person.email}`}>Email ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Anjum Ulazim</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  );
}
