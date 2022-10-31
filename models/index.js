import Sequelize from "sequelize";
import bookInfoModel from "./bookInfo";
import bookModel from "./books";
import userModel from "./user";

export const sequelize = new Sequelize("books_db", "soniafaye", "Sonechka18", {
  host: "localhost",
  dialect: "postgres",
  operatorAliases: false,
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000,
  //   },
});

//bookModel.hasOne(bookInfoModel);
//bookInfoModel.belongsTo(bookModel);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = userModel(sequelize, Sequelize);
db.books = bookModel(sequelize, Sequelize);
db.bookInfo = bookInfoModel(sequelize, Sequelize);

db.books.hasOne(db.bookInfo);
db.bookInfo.belongsTo(db.books);
sequelize.sync();
//...

export default db;
