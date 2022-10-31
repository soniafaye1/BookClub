import db from "../../../models";
db.sequelize.sync();
const Book = db.books;

export default async (req, res) => {
  // console.log(req.body)
  // Recieved params from request
  let { key, title, subject, author_key, author_name } = req.body;
  try {
    console.log("body:" + req);

    // Check if user with that email if already exists
    const book = await Book.findOne({
      where: { title: title },
    });
    if (book) {
      return res.status(422).send(`Book already exists with that title`);
    }
    const newBook = await Book.create({
      key,
      title,
      subject,
      author_key,
      author_name,
    });
    res.status(201).send(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in sync. Try Again");
  }
};
