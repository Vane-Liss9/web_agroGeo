import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        <Link className="brand brand-footer" to="/">
          <span className="brand-mark">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 33V17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              <path d="M20 22C10 22 7 15 8 8c8-1 15 3 15 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 27c0-8 5-13 13-13 1 8-3 14-13 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>

          <span className="brand-name">
            Agro<span>Resiliente</span>
          </span>
        </Link>

        <p>
          Transformamos datos en decisiones para una agricultura más resiliente.
        </p>

        <span className="footer-copy">
          © {new Date().getFullYear()} · Proyecto NASA Space Apps
        </span>

      </div>
    </footer>
  );
}