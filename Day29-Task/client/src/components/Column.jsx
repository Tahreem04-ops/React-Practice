import {
  Droppable,
} from "@hello-pangea/dnd";

import Task from "./Task";

function Column({
  title,
  tasks,
  droppableId,
}) {

  return (

    <Droppable droppableId={droppableId}>

      {(provided) => (

        <div
          className="column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >

          <h2>{title}</h2>

          {tasks.map((task, index) => (

            <Task
              key={task.id}
              task={task}
              index={index}
            />

          ))}

          {provided.placeholder}

        </div>

      )}

    </Droppable>

  );

}

export default Column;