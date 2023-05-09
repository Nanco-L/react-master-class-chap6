import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      // same board movement
      const newToDos = [...toDos[source.droppableId]];
      const taskObj = newToDos[source.index];
      newToDos.splice(source.index, 1);
      newToDos.splice(destination.index, 0, taskObj);
      setToDos((prev) => ({
        ...prev,
        [source.droppableId]: newToDos,
      }));
      return;
    }
    if (destination.droppableId !== source.droppableId) {
      // cross board movement
      const start = [...toDos[source.droppableId]];
      const taskObj = start[source.index];
      start.splice(source.index, 1);
      const finish = [...toDos[destination.droppableId]];
      finish.splice(destination.index, 0, taskObj);
      setToDos((prev) => ({
        ...prev,
        [source.droppableId]: start,
        [destination.droppableId]: finish,
      }));
      return;
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
