const createTask = require("../modals/Taskmodels");
const creater = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body)
  try {
    const task = await createTask.create({ title, description });
    res.status(200).json(task);
    // await createTask.save();
  } catch (e) {
    console.log(e);
  }
};
module.exports = {creater}