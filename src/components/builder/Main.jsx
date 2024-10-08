'use client';
import { DndContext, DndProvider, useDragDropManager } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Frame, { FrameContext, FrameContextConsumer } from 'react-frame-component';
import { Box } from './Box';
import { useContext, useEffect } from 'react';
import { Container } from '../widgets/container';
import { Canvas } from './Canvas';

const DndFrame = ({ children }) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);

  useEffect(() => {
    dragDropManager.getBackend().addEventListeners(window);
  });

  return children;
};


const FrameBindingContext = ({ children }) => {
  const manager = useDragDropManager();
  const backend = manager.getBackend();

  return (
    <FrameContextConsumer>
      {({ document, window }) => {
        backend.addEventListeners(window);
        return (
          <DndProvider backend={HTML5Backend} context={window}>
            {children}
          </DndProvider>
        );
      }}
    </FrameContextConsumer>
  )
};

export const Main = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-300 mt-20 p-4">
        <Box name="Paper" />
        <Container />
      </div>


      <Frame className="w-full h-screen mt-20">
        <DndFrame>
          <Canvas />
        </DndFrame>
      </Frame>
    </div>
  );
};
