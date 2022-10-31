const bookInfoModel = (sequelize, Sequelize) => {
  const BookInfo = sequelize.define("bookInfo", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cover_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    publisher: {
      type: Sequelize.STRING,
    },
    publish_date: {
      type: Sequelize.STRING,
    },
    num_pages: {
      type: Sequelize.INTEGER,
    },
    bookId: {
      type: Sequelize.INTEGER,
    },
  });

  return BookInfo;
};

export default bookInfoModel;
