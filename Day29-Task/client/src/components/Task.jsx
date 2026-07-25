import {
  Draggable,
} from "@hello-pangea/dnd";

function Task({
  task,
  index,
}) {

  return (

    <Draggable
      draggableId={task.id}
      index={index}
    >

      {(provided) => (

        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >

          <h3>{task.title}</h3>

          <p>{task.description}</p>

        </div>

      )}

    </Draggable>

  );

}

export default Task;