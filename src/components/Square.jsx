import React from 'react';
import { useDrag, useDrop, DragDropContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Square = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'square' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'square',
    drop: () => console.log('Square dropped!'),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const squareStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
    margin: '10px',
  };

  return (
    <div ref={drop} style={squareStyle}>
      <div ref={drag}>Drag me!</div>
      {isOver && !canDrop && <div>Cannot drop here!</div>}
    </div>
  );
};

export default Square;
