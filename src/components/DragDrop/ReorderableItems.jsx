import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


export default function ReorderableItems() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  function reorderNumbers(result) {
    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    setNumbers((numbers) => {
      const nums = [...numbers];
      const [removed] = nums.splice(startIndex, 1);
      nums.splice(endIndex, 0, removed);
      return nums;
    });
  }

  return (
    <DragDropContext onDragEnd={reorderNumbers}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {numbers.map((num, i) => {
              return (
                <Draggable key={num} draggableId={num.toString()} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      variant={snapshot.isDragging ? "elevation" : "outlined"}
                      elevation={4}
                    >
                      {num}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}


