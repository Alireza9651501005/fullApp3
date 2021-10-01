const User  = require("../models/User");

exports.createUser = async (req, res) => {
  const { korsName, age } = req.body;
    console.log("kors name is ========================== ",korsName)
  try {
    const newUser = await User.create({
      korsName,
      age,
    });

    // res.set("x-total", "alireza");
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ title: "this is wrong baby!" });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        // res.set("x-totall", 'mohammad');
        return res.status(200).json(allUsers);
    } catch (err) {
        console.log(err);
        res.status(500).json({title: "comes frome users 63"});
      }
}