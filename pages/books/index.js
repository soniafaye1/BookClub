import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import db from "../../models";
import bookStyles from "../../styles/Books.module.css";
import utilStyles from "../../styles/utils.module.css";

function Books({ booksObj }) {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>
      <h1>All Books</h1>
      <section className={utilStyles.headingMd}>
        <div className={bookStyles.container}>
          {booksObj.map((book) => {
            return (
              <Link
                href={{
                  pathname: "/books/:[bookId]",
                  query: { id: book.id },
                }}
              >
                <div className={bookStyles.card} key={book.id}>
                  <h1 className={bookStyles.title}>{book.title}</h1>
                  <h3>{book.subject}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await db.books.findAll();

  const books = JSON.stringify(response);
  const booksObj = JSON.parse(books);
  return { props: { booksObj } };
}

export default Books;
