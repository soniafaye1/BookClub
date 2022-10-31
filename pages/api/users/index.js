import db from "../../../models";
db.sequelize.sync();
const User = db.users;

export default async (req, res) => {
  // Recieved params from request
  let { name, email } = req.body;
  try {
    // Check if user with that email if already exists
    const user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      return res.status(422).send(`User already exist with that ${email}`);
    }
    const newUser = await User.create({
      name,
      email,
    });
    res.status(201).send(newUser);

    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in signup. Please try again.");
  }
};

// export async function handler(req, res) {
//   console.log("USER GET: ", User);
//   const users = await User.findAll();
//   res.status(200).json(users);
// }
