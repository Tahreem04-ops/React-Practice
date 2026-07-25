import { DragDropContext } from "@hello-pangea/dnd";
import Column from "./Column";
import api from "../services/api";

function Board({ tasks, setTasks }) {
  // Apni lists table ki IDs
  const TODO_ID = "e9c0ea2e-de28-41db-83bb-ccd1e8a31d6c";
  const IN_PROGRESS_ID = "704b82fd-315f-4e9f-ba16-019d24c857"; // <-- apna poora UUID paste karna
  const DONE_ID = "4f6a4be3-3507-4725-8270-10823bd7"; // <-- apna poora UUID paste karna

  const todo = tasks.filter((task) =>
    task.list_id.startsWith(TODO_ID)
  );

  const inProgress = tasks.filter((task) =>
    task.list_id.startsWith(IN_PROGRESS_ID)
  );

  const done = tasks.filter((task) =>
    task.list_id.startsWith(DONE_ID)
  );

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // UI update
    const updatedTasks = tasks.map((task) => {
      if (task.id === draggableId) {
        return {
          ...task,
          list_id: destination.droppableId,
          position: destination.index,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

    // Database update
    try {
      await api.put(`/tasks/${draggableId}`, {
        list_id: destination.droppableId,
        position: destination.index,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        <Column
          title="Todo"
          tasks={todo}
          droppableId={TODO_ID}
        />

        <Column
          title="In Progress"
          tasks={inProgress}
          droppableId={IN_PROGRESS_ID}
        />

        <Column
          title="Done"
          tasks={done}
          droppableId={DONE_ID}
        />
      </div>
    </DragDropContext>
  );
}

export default Board;