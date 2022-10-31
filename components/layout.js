import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.topnav}>
              <Link className="navLink" class="active" href="/">
                <a>Home</a>
              </Link>
              <Link className="navLink" href="/books">
                <a>Books</a>
              </Link>
              <Link className="navLink" href="/profile">
                <a>Profile</a>
              </Link>
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <div className={styles.topnav}>
              <Link className="navLink" class="active" href="/">
                <a>Home</a>
              </Link>
              <Link className="navLink" href="/books">
                <a>Books</a>
              </Link>
              <Link className="navLink" href="/profile">
                <a>Profile</a>
              </Link>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
