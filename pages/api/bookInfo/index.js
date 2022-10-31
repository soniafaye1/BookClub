import db from "../../../models";
db.sequelize.sync();
const BookInfo = db.bookInfo;

export default async (req, res) => {
  // console.log(req.body)
  // Recieved params from request
  let {
    key,
    title,
    cover_id,
    description,
    publisher,
    publish_date,
    num_pages,
    bookId,
  } = req.body;
  try {
    // Check if user with that email if already exists
    const book = await BookInfo.findOne({
      where: { title: title },
    });
    if (book) {
      return res.status(422).send(`Book info already exists with that title`);
    }
    const newBookInfo = await BookInfo.create({
      key,
      title,
      cover_id,
      description,
      publisher,
      publish_date,
      num_pages,
      bookId,
    });
    res.status(201).send(newBookInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in sync. Try Again");
  }
};
