import { FC } from "react";
import Link from "next/link";
import { PostData } from "../types";

export type SidebarProps = {
  pages: PostData[];
  categories: string[];
};

const Sidebar: FC<SidebarProps> = ({ pages, categories }) => {
  return (
    <div id="sidebar" className="inactive">
      <div className="inner">
        {/* <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section> */}

        <nav id="menu">
          <header className="major">
            <h2>Pages</h2>
          </header>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            {pages.map(({ title, slug }) => (
              <li key={slug}>
                <Link href={`/${slug}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav id="menu">
          <header className="major">
            <h2>Categories</h2>
          </header>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                {category}
                {/* <Link href="/test">
                  <a>{category}</a>
                </Link> */}
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

        <footer id="footer">
          <p className="copyright">
            © Untitled. All rights reserved. Demo Images:{" "}
            <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
            <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
      <a href="#sidebar" className="toggle">
        Toggle
      </a>
    </div>
  );
};

export default Sidebar;
