import Layout from "../../components/layout";
import singleBook from "../../styles/bookId.module.css";
import db from "../../models";

export default function BookId({ bookObj, infoObj }) {
  const imageId = infoObj.cover_id;
  return (
    <Layout>
      <div className={singleBook.container} key={bookObj.id}>
        <img
          className={singleBook.image}
          src={`https://covers.openlibrary.org/b/id/${imageId}-M.jpg`}
        />
        <div className={singleBook.infoCard}>
          <h1>{bookObj.title}</h1>
          <h2>By: {bookObj.author_name}</h2>
          <p>{infoObj.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  //match book to http link id
  const currentId = query.id;
  const response = await db.books.findOne({ where: { id: currentId } });

  //match bookinfo to bookId
  const matchBook = response.id;
  const infoResponse = await db.bookInfo.findOne({
    where: { bookId: matchBook },
  });

  //stringify info, then parse, and then set as props
  const info = JSON.stringify(infoResponse);
  const infoObj = JSON.parse(info);

  const book = JSON.stringify(response);
  const bookObj = JSON.parse(book);
  return { props: { bookObj, infoObj } };
}
