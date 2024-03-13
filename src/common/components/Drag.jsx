import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';

// 套件 react-beautiful-dnd, https://www.npmjs.com/package/react-beautiful-dnd
// 上下拖曳項目
const Drag = ({children, move}) => {

  const id = uuidv4();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    
    move(source.index, destination.index);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id}>
        {children}
      </Droppable>
    </DragDropContext>
  );
}

export default Drag;