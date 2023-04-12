import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
`;

const Board = styled.div`
    background-color: ${(props) => props.theme.boardColor};
`;

const Card = styled.div`
    background-color: ${(props) => props.theme.cardColor};
`;

function App() {
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Droppable droppableId="one">
                    {(magic) => (
                        <Board ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId="first" index={0}>
                                {(magic) => (
                                    <Card
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}
                                    >
                                        Hello
                                    </Card>
                                )}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {(magic) => (
                                    <Card
                                        ref={magic.innerRef}
                                        {...magic.dragHandleProps}
                                        {...magic.draggableProps}
                                    >
                                        Hello!
                                    </Card>
                                )}
                            </Draggable>
                        </Board>
                    )}
                </Droppable>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
