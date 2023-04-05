import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
    const onDragEnd = () => {};
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div>
                    <Droppable droppableId="one">
                        {() => (
                            <ul>
                                <Draggable draggableId="first" index={0}>
                                    {() => <li>Hello</li>}
                                </Draggable>
                                <Draggable draggableId="second" index={2}>
                                    {() => <li>Hello!</li>}
                                </Draggable>
                            </ul>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
}

export default App;
