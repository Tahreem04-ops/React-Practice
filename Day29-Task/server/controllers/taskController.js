import supabase from "../config/supabase.js";

// Get all tasks
export const getTasks = async (req, res) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("position");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
};

// Create task
export const createTask = async (req, res) => {
  const { list_id, title, description } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        list_id,
        title,
        description,
      },
    ])
    .select();

  if (error) {
    return res.status(500).json(error);
  }

  res.status(201).json(data);
};

// Update task
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { list_id, position } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .update({
      list_id,
      position,
    })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
};

// Delete task
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    message: "Task deleted successfully",
  });
};