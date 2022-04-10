import Task from "../models/Task"; // '../' to up a level.

export const renderTask = async (req, res) => {
  try {
    const tasks =
      await Task.find().lean(); /*'.find()' to list the objects in the database,
     '.lean()' to transform mongo objects to javascript objects*/
    res.render("index", { tasks: tasks });
  } catch (error) {
    console.error(error.message);
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean(); //we check the task by the id
    res.render("edit", { task: task });
  } catch (error) {
    console.error(error.message);
  }
};
export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done; //we convert the done property to its inverse
  task.save(); //we save the configuration.
  res.redirect("/");
};
export const addTask = async (req, res) => {
  //we use the async function because we are using await
  const task = Task(req.body);
  await task.save(); //we use await because we are using asyncronous code
  res.redirect("/");
};
export const dataUpdate = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body); //We will find and remove the element receive in the post request.
  res.redirect("/");
};
