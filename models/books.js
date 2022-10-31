const bookModel = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author_key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Book;
};

export default bookModel;
