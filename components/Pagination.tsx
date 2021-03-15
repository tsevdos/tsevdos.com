import { FC } from "react";
import Link from "next/link";
import styles from "../pages/page.module.css";

export type PaginationProps = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

const Pagination: FC<PaginationProps> = ({
  currentPage = 1,
  isFirstPage = false,
  isLastPage = false,
}) => (
  <nav className={styles.pagination}>
    {!isFirstPage ? (
      <Link href={`/page/${currentPage - 1}`}>
        <a className="button primary prev">Prev page</a>
      </Link>
    ) : (
      <span />
    )}
    {!isLastPage ? (
      <Link href={`/page/${currentPage + 1}`}>
        <a className="button primary next">Next page</a>
      </Link>
    ) : (
      <span />
    )}
  </nav>
);

export default Pagination;
